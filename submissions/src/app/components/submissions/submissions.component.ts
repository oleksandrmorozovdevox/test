import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TestData } from 'src/app/core/test-data/test-data';

@Component({
  selector: 'app-submissions',
  templateUrl: './submissions.component.html',
  styleUrls: ['./submissions.component.scss']
})
export class SubmissionsComponent implements OnInit {

  public submissionItems = TestData.SubmissionItems;
  public form!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      "date": new FormControl(new Date())
    });
  }

}
