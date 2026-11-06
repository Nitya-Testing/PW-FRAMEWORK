import fs from "fs";
import { parse } from "csv-parse/sync";

export class CsvHelper{

    static readCsv(filepath:string) : Record<string,string>[]{
        return parse(fs.readFileSync(filepath,"utf-8"),{
            columns:true, // skip the 1st column as its header
            skip_empty_lines:true, //skip any empty entries
            trim:true //skip trilling spaces
        }) as Record<string,string>[]
    }
}