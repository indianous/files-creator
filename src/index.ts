import { mkdir } from "node:fs";
import { join } from "node:path";

function makeDirectory(folderPath: string) {
  mkdir(folderPath, { recursive: true }, (err) => {
    console.log(err);
  });
}

function filesCreator(
  sourcePath: string,
  foldersName: string[],
  subfoldersName: string[]
) {
  for (const folderName of foldersName) {
    const folderPath = join(sourcePath, "src", folderName);
    makeDirectory(folderPath);
  }
  for (const folderName of foldersName) {
    for (const subfolderName of subfoldersName) {
      const folderPath = join(sourcePath, "src", folderName, subfolderName);
      makeDirectory(folderPath);
    }
  }
}

export { filesCreator };
