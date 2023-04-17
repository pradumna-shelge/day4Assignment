import { Component } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { Address, dataformat } from '../validate';

@Component({
  selector: 'app-reactive-from',
  templateUrl: './reactive-from.component.html',
  styleUrls: ['./reactive-from.component.css']
})
export class ReactiveFromComponent {
  index=0;
  dataArray=[{}as dataformat]
skillName=''
skillArray =['']
  fromBuild: any;

  constructor(private fb:FormBuilder){
    this.fromBuild = this.fb.group({
      id:['',Validators.required],
      name:['',Validators.required],
      address:this.fb.group({
        flat:['',Validators.required],
        buildingName:['',Validators.required],
        city:['',Validators.required],
        state:['',Validators.required]
      }),
      gender:[],
      skill:this.fb.array([
        
      ])

    })
  }
  get skill(){
    return this.fromBuild.get('skill') as FormArray
  }
  addSkills(nepara:string){
    this.skillArray.push(nepara)

    this.skill.push(this.fb.control(nepara))
  }

  postData(){
  let address:Address = {
    flat:this.fromBuild.get('address').get('flat')?.value,
    building:this.fromBuild.get('address').get('buildingName')?.value,
    city:this.fromBuild.get('address').get('city')?.value,
    state:this.fromBuild.get('address').get('state')?.value
  } 
    this.dataArray.push({
      id: this.fromBuild.get('id').value ,
      name:this.fromBuild.get('name').value,
      address:address,
      gender:this.fromBuild.get('gender').value,
      skills:this.fromBuild.get('skill').value
      
    })

  console.log(this.dataArray)
  }

}