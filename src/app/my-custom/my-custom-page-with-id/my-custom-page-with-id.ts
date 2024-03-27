import { Component } from "@angular/core";
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: "my-custom-page-with-id.html",
})

export class MyCustomPageWithId{
    id: any;
    constructor(private route: ActivatedRoute) { }
  
    ngOnInit(): void {
      this.id = this.route.snapshot.paramMap.get("id")
    }

}