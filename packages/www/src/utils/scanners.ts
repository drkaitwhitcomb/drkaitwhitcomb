import fs from "fs";
import path from "path";

const REGEX_YAML_FILE = /\.(yaml|yml)$/i;

export function getCurrentDirectory(): string {
    try {
        return process.cwd();
    } catch (error) {
        throw new Error("Failed to get current directory");
    }
}

export function getFilePath(dir: string, fileName: string): string {
    try {
        return path.join(dir, fileName);
    } catch (error) {
        throw new Error(`Failed to get file path: ${fileName} in directory: ${dir}`);
    }
}
export function getFilesInDirectory(dir: string): string[] {
    try {
        return fs.readdirSync(dir);
    } catch (error) {
        throw new Error(`Failed to read directory: ${dir}`);
    }
}

export function getFileInDirectory(dir: string, fileName: string): string {
    try {
        const filePath = path.join(dir, fileName);
        const fileContent = fs.readFileSync(filePath, 'utf8');
        return fileContent;
    } catch (error) {
        throw new Error(`Failed to read file: ${fileName} in directory: ${dir}`);
    }
}

export function filterFilesByExtension(files: string[], extension: RegExp): string[] {
    return files.filter(file => extension.test(file));
}

export function removeExtensionFromFileName(file: string, extension: RegExp): string {
    return file.replace(extension, "");
}

export function scanDirectoryForYamlFiles(): string[] {
    const dir = getCurrentDirectory();
    const files = getFilesInDirectory(dir);
    const yamlFiles = filterFilesByExtension(files, REGEX_YAML_FILE);
    return yamlFiles.map(file => removeExtensionFromFileName(file, REGEX_YAML_FILE));
}
