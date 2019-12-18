import { Component, OnInit, ViewChild, NgZone} from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {
  headerColor = 'black';
  startAnim = false;
  @ViewChild('select') Select;


  
 exampleData = [
    {
      selected: true,
      id: 'basic1',
      text: 'Working together on a project'
    },
    { selected: true,
      id: 'basic2',
     // disabled: true,
      text: 'Booking a consultation'
    },
    {
      selected: false,
      id: 'basic3',
      text: 'Something else'
    }
  ];

  angForm: FormGroup;
  constructor(private fb: FormBuilder,
    private zone: NgZone ) {
   this.createForm();
 }
  createForm() {
   this.angForm = this.fb.group({
     // topic: ['', Validators.required ],
      name: ['', Validators.required ],
      email: ['', Validators.required ],
      tell_us: ['', Validators.required ],
      checkbox: ['', Validators.required]
   });
 }


 reset(){
   this.zone.run(() => {
 
   this.exampleData[1].selected = false;
   this.exampleData[0].selected = true;
   this.angForm.reset();
   console.log(this.exampleData);
   })
  


 }

 selectChange(event){

  console.log(event);

 }

  ngOnInit() {

    setTimeout(() => {
      this.startAnim = true;
    })
 
//this.Select.element[0].value = 'basic3';
console.log(this.Select);

// this.Select.element.nativeElement.value = 'basic3';
  }




}
