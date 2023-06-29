import * as fs from 'fs';
import path from 'path';
import {type StorageProvider, type DocumentId} from './StorageProvider';
import {glob} from 'glob';

export class NodeFileStorageProvider implements StorageProvider {
	constructor(private readonly dir: string) {
		if (!fs.existsSync(this.dir)) {
			fs.mkdirSync(this.dir, {recursive: true});
		}
	}

	async addDocument(documentId: DocumentId, header: Uint8Array): Promise<void> {
		const filePath = path.join(this.dir, `${documentId}.header`);
		await fs.promises.writeFile(filePath, header);
	}

	async deleteSnapshot(documentId: DocumentId): Promise<void> {
		const filePath = path.join(this.dir, `${documentId}.snapshot`);
		if (fs.existsSync(filePath)) {
			await fs.promises.unlink(filePath);
		}
	}

	async getDocumentHeader(documentId: DocumentId): Promise<Uint8Array | undefined> {
		const filePath = path.join(this.dir, `${documentId}.header`);
		if (fs.existsSync(filePath)) {
			return fs.promises.readFile(filePath);
		}

		return undefined;
	}

	async listDocuments(): Promise<DocumentId[]> {
		const files = await glob(`${this.dir}/*.header`);
		return files.map(file => path.basename(file, '.header'));
	}

	async loadChunks(documentId: DocumentId): Promise<Uint8Array[]> {
		const filePath = path.join(this.dir, `${documentId}.chunks`);
		if (!fs.existsSync(filePath)) {
			return [];
		}

		const fileContent = await fs.promises.readFile(filePath);
		let offset = 0;
		const chunks: Uint8Array[] = [];

		while (offset < fileContent.length) {
			const chunkSize = fileContent.readInt32BE(offset);
			offset += 4; // Size of 32-bit integer

			const chunk = fileContent.subarray(offset, offset + chunkSize);
			chunks.push(chunk);
			offset += chunkSize;
		}

		return chunks;
	}

	async loadSnapshot(documentId: DocumentId): Promise<Uint8Array | undefined> {
		const filePath = path.join(this.dir, `${documentId}.snapshot`);
		if (fs.existsSync(filePath)) {
			return fs.promises.readFile(filePath);
		}

		return undefined;
	}

	async removeDocument(documentId: DocumentId): Promise<void> {
		const headerPath = path.join(this.dir, `${documentId}.header`);
		const chunksPath = path.join(this.dir, `${documentId}.chunks`);
		const snapshotPath = path.join(this.dir, `${documentId}.snapshot`);

		if (fs.existsSync(headerPath)) {
			await fs.promises.unlink(headerPath);
		}

		if (fs.existsSync(chunksPath)) {
			await fs.promises.unlink(chunksPath);
		}

		if (fs.existsSync(snapshotPath)) {
			await fs.promises.unlink(snapshotPath);
		}
	}

	async saveChunk(documentId: DocumentId, chunk: Uint8Array, _index: number): Promise<void> {
		const filePath = path.join(this.dir, `${documentId}.chunks`);

		const chunkSizeBuffer = Buffer.alloc(4);
		chunkSizeBuffer.writeInt32BE(chunk.length);

		await fs.promises.appendFile(filePath, Buffer.concat([chunkSizeBuffer, chunk]));
	}

	async saveSnapshot(documentId: DocumentId, binary: Uint8Array, clearChunks: boolean): Promise<void> {
		const filePath = path.join(this.dir, `${documentId}.snapshot`);
		await fs.promises.writeFile(filePath, binary);
		if (clearChunks) {
			const chunkPath = path.join(this.dir, `${documentId}.chunks`);
			if (fs.existsSync(chunkPath)) {
				await fs.promises.unlink(chunkPath);
			}
		}
	}
}