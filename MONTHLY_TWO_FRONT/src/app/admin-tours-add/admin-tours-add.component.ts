import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToursService } from '../../Services/tours.service';

@Component({
  selector: 'app-admin-tours-add',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './admin-tours-add.component.html',
  styleUrl: './admin-tours-add.component.css'
})
export class AdminToursAddComponent implements OnInit {
  form!: FormGroup
  message!: string

  constructor(private fb: FormBuilder, private tourService: ToursService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: this.fb.control(null, Validators.required),
      image: this.fb.control(null, Validators.required),
      hotels: this.fb.array([]),
      destination: this.fb.control(null, Validators.required),
      description: this.fb.control(null, Validators.required),
      price: this.fb.control(null, Validators.required)
    })
  }

  get hotels(): FormArray {
    return this.form.get('hotels') as FormArray;
  }

  addHotel(): void {
    this.hotels.push(new FormControl('', Validators.required));
  }


  onSubmit() {
    console.log(this.form)
    this.tourService.addTour(this.form.value).subscribe(res => {
      this.message = res.message


      setTimeout(() => {
        this.message = ""
        this.form.reset()
      }, 2000)

    })
  }
}
