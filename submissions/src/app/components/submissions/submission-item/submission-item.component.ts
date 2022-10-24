import { Component, Input, OnInit } from '@angular/core';
import { Status } from 'src/app/core/enums/status.enum';
import { Submission } from 'src/app/core/models/submission.model';
import { TestData } from 'src/app/core/test-data/test-data';

@Component({
  selector: 'app-submission-item',
  templateUrl: './submission-item.component.html',
  styleUrls: ['./submission-item.component.scss']
})
export class SubmissionItemComponent implements OnInit {

  public statuses = Status;

  @Input() public submissionItem!: Submission;

  constructor() { }

  ngOnInit(): void {
    this.statuses.Uncomplete
  }

}
