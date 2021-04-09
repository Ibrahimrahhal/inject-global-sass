import * as path from "path";
import * as fs from "fs";
const loader = function (content:string) :string {
    this.cacheable();
    const options = this.getOptions();
    const globalFiles:Array<string> = options.files instanceof Array ? options.files : [options.files];
    const globalFilesContent = (globalFiles || []).reduce((prev:string, currentPath:string) => {
        const filePath = path.resolve(currentPath);
        const fileContent = fs.readFileSync(filePath, 'utf8');
        return `${prev} \n ${fileContent}`;
    }, "");

    return `${globalFilesContent}\n${content}`;
}

module.exports = loader;