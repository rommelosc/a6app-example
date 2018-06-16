import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  //name = "Oscar";
  name: string;
  age: number;
  email: string;
  address:Address;
  hobbies:string[];
  hello: any;
  posts:Post[];
  isEdit: boolean = false;

  constructor(private dataService:DataService) {
    console.log('Constructor ran...');
   }

  ngOnInit() {
    console.log('ngOnInit ran...');
    this.name = 'Oscar RM';
    this.age = 29;
    this.email = 'example@mail.com';
    this.address ={
      street: 'Nardo',
      city: 'Tlaxcala',
      state: 'Tlaxcala'
    }
    this.hobbies = ['Guitar', 'Listen to music', 'Write code'];
    this.hello = 'whatever';

    this.dataService.getPosts().subscribe(posts => {
      //console.log(posts);
      this.posts = posts;
    });
  }

  onClick(){
    console.log('Hi!!!!!');
    this.name = 'Eduardo';
    this.hobbies.push('New hobby');
  }

  addHobby(hobby){
    console.log(hobby);
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(hobby){
    console.log(hobby);
    for(let i = 0; i < this.hobbies.length; i++){
      if(this.hobbies[i] == hobby){
        this.hobbies.splice(i, 1);
      }
    }
  }

  toggleEdit(){
    this.isEdit = !this.isEdit;
  }

}

interface Address{
  street:string,
  city:string,
  state:string
}

interface Post{
  id:number,
  title:string,
  userId:number,
  body:string
}
