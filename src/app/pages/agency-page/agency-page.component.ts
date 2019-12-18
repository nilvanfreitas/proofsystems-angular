import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agency-page',
  templateUrl: './agency-page.component.html',
  styleUrls: ['./agency-page.component.scss']
})
export class AgencyPageComponent implements OnInit {
  headerColor = 'black';
 
  teamMemberList = [
    { id:1,
      fullName: 'Tyler Ward',
      status: 'Founder & CEO',
      img: '../../../assets/team-member.png',
      descr:`Lorem Ipsum is simply dummy text of the 
      printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries`
    },
    {
      id:2,
      fullName: 'James Thorburn',
      status: 'CMO',
      img: '../../../assets/team-member2.png',
      descr:`Lorem Ipsum is simply dummy text of the 
      printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries`
    },
    {

      id:3,
      fullName: 'Ivan Mykolaiv',
      status: 'Designer',
      img: '../../../assets/team-member4.png',
      descr:`Lorem Ipsum is simply dummy text of the 
      printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries`
    },
    { id:4,
      fullName: 'Daria Baltina',
      status: 'Designer',
      img: '../../../assets/team-member3.png',
      descr:`Lorem Ipsum is simply dummy text of the 
      printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries`
    },
    {
      id:5,
      fullName: 'Oleksandr Izmailov',
      status: 'Designer',
      img: '../../../assets/team-member5.png',
      descr:`Lorem Ipsum is simply dummy text of the 
      printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries`
    },
    {
      id:6,
      fullName: 'Kate Herbert',
      status: 'Designer',
      img: '../../../assets/Kate.png',
      descr:`Lorem Ipsum is simply dummy text of the 
      printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries`
    },
    {
      id:7,
      fullName: 'Tahir Berdyev',
      status: 'Developer',
      img: '../../../assets/team-member7.png',
      descr:`Lorem Ipsum is simply dummy text of the 
      printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries`
    },
    {
      id:7,
      fullName: 'Dmytro Dutka',
      status: 'Designer',
      img: '../../../assets/team-member8.png',
      descr:`Lorem Ipsum is simply dummy text of the 
      printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries`
    },
    {
      id:7,
      fullName: 'Viacheslav V Rybak',
      status: 'Developer',
      img: '../../../assets/team-member9.png',
      descr:`Lorem Ipsum is simply dummy text of the 
      printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries`
    }
  ];
  startAnim = false;
  selectedMember;
  constructor() { }
  showModal(member){
    this.selectedMember = member;
  }
  closeModal(){
    this.selectedMember = null;
  }

  ngOnInit() {
    setTimeout(() => {
      this.startAnim = true;
    })
  }

}
