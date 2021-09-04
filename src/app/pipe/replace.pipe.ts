import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'replace'
})
export class ReplacePipe implements PipeTransform {

  transform(code: string, value: string, valueToReplace: string) {
    return code.replace(value, valueToReplace);
  }

}
