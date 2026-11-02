import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule,MatDialogRef } from '@angular/material/dialog';

@Component({
  imports: [MatDialogModule],
  selector: 'app-dialog-pre-natal',
  styleUrl: './dialog-pre-natal.css',
  templateUrl: './dialog-pre-natal.html',
})
export class DialogPreNatal implements OnInit {

  constructor(
    public dialogRef:MatDialogRef<DialogPreNatal>,
    @Inject(MAT_DIALOG_DATA) public data:any
  ){
    console.log("deixa eu ver",this.data)
  }

  ngOnInit(): void {
    
  }
  fecharDialog(){
    this.dialogRef.close()
  }
}
