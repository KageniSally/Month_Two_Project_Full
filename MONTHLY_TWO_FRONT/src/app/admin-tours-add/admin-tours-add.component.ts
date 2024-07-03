import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToursService } from '../../Services/tours.service';
import { Store } from '@ngrx/store';
import { AppState } from '../State';
import { TourActions } from '../State/Actions/tour.action';
import { errorMessageSelector, successMessageSelector } from '../State/Selectors/tour.selector';

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

  successMessage$ = this.store.select(successMessageSelector)
  errorMessage$=this.store.select(errorMessageSelector)

  constructor(private fb: FormBuilder, private store: Store<AppState>) { }

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
    // this.tourService.addTour(this.form.value).subscribe(res => {
    //   this.message = res.message


    //   setTimeout(() => {
    //     this.message = ""
    //     this.form.reset()
    //   }, 2000)

    // })

    this.store.dispatch(TourActions.addTour({ tour: this.form.value }))
    setTimeout(() => {

    }, 2000)
    this.form.reset()
  }
}
