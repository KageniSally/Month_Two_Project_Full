import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HotelsService } from '../../Services/hotels.service';

@Component({
  selector: 'app-admin-hotels-add',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './admin-hotels-add.component.html',
  styleUrl: './admin-hotels-add.component.css'
})
export class AdminHotelsAddComponent implements OnInit {
  form!: FormGroup
  message!: string

  constructor(private fb: FormBuilder, private hotelService: HotelsService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: this.fb.control(null, Validators.required),
      image: this.fb.control(null, Validators.required),
      location: this.fb.control(null, Validators.required),
      starRating: this.fb.control(null, Validators.required)
    })
  }

  onSubmit() {
    console.log(this.form)
    this.hotelService.addHotel(this.form.value).subscribe(res => {
      this.message = res.message

      setTimeout(()=>{
        this.message=""
        this.form.reset()
      },2000)
      

      

    })
  }
}
