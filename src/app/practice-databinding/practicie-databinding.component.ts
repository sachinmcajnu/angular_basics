import { getCurrencySymbol } from "@angular/common";
import { Component } from "@angular/core";



@Component({
    selector:'practice-databinding-component',
    templateUrl:'./practice-databinding.component.html',
    styleUrls:[
        './practice-databinding.component.css'
    ]
})
export class PracticeDatabindingComponent{



   username:string=""


   isUserNameEmpty():boolean {
       return this.username=="";
   }

   callee = ()=>{
    this.username = "";
   }

   resetUserName(){
    this.callee();
   }

   getColor(): any {
     return this.isUserNameEmpty()?'red':'green';
    }
}