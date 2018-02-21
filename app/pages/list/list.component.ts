// imports the social share module
import * as SocialShare from "nativescript-social-share";

import { Component, ElementRef, ViewChild, OnInit, NgZone } from "@angular/core";
import { Grocery } from "../../shared/grocery/grocery";
import { GroceryListService } from "../../shared/grocery/grocery-list.service";
import { TextField } from "ui/text-field";

@Component({
    selector: "list",
    moduleId: module.id,
    providers: [GroceryListService],
    templateUrl: "./list.html",
    styleUrls: ["./list-common.css", "./list.css"]
})
export class ListComponent implements OnInit {

    groceryList: Array<Grocery> = [];
    grocery = "";
    isLoading = false;
    listLoaded = false;

    @ViewChild("groceryTextField") groceryTextField: ElementRef;

    constructor(private groceryListService: GroceryListService,
                private zone: NgZone) {}

    ngOnInit() {
        this.isLoading = true;
        this.groceryListService.load()
            .subscribe(loadedGroceries => {
                loadedGroceries.forEach((groceryObject) => {
                    this.groceryList.unshift(groceryObject);
                });
                this.isLoading = false;
                this.listLoaded = true;
            });
    }

    add() {
        if (this.grocery.trim() === "") {
            alert("Enter a grocery item");
            return;
        }

        // Dismiss the keyboard
        let textField = <TextField>this.groceryTextField.nativeElement;
        textField.dismissSoftInput();

        this.groceryListService.add(this.grocery)
            .subscribe(
                groceryObject => {
                    this.groceryList.unshift(groceryObject);
                    this.grocery = "";
                },
                () => {
                    alert({
                        message: "An error occurred while adding an item to your list.",
                        okButtonText: "OK"
                    });
                    this.grocery = "";
                }
            )
    }

    // function that handler sharing the grocesry list on social media
    share() {
        let listString = this.groceryList
            .map(grocery => grocery.name)
            .join(", ")
            .trim();
        SocialShare.shareText(listString);
    }

    //delete a grocery from the list
    delete(grocery: Grocery) {
        this.groceryListService.delete(grocery.id)
            .subscribe(() => {
                // Running the array splice in a zone ensures that change detection gets triggered.
                this.zone.run(() => {
                    let index = this.groceryList.indexOf(grocery);
                    this.groceryList.splice(index, 1);
                });
            });
    }
}