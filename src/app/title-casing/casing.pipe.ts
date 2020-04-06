import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
name: "casing"
})
export class CasingPipe implements PipeTransform
{
  prep=[
    'on','in','at','since','for','ago','before',
    'to','past','till','untill','by','of','the'
  ];

  transform(value: string) {
    if(!value)
      return null;
    let msg=value.toLowerCase().split(' ');
    let newMsg=msg[0].charAt(0).toUpperCase()+msg[0].substr(1)+' ';

    for(let i =1;i<msg.length;i++)
    {
      let str=msg[i];

      if(this.prep.indexOf(str)>=0)
        newMsg+=str+' ';
      else
        newMsg+=str.charAt(0).toUpperCase()+str.substr(1)+' ';
    }
    return newMsg;

  }

}
