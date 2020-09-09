import {
  Component,
  ViewChild,
  ElementRef,
  Renderer2,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from "@angular/core";
import { assetUrl } from "src/single-spa/asset-url";

@Component({
  selector: "app1-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  @ViewChild("switchComp") switchComp: ElementRef;

  public isChecked = null;
  public customStyle =
    "background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 45%, rgba(0,212,255,1) 100%);";

  ngAfterViewInit() {
    this.isChecked = this.switchComp.nativeElement.checked;
    this.rd.listen(
      this.switchComp.nativeElement,
      "sv-check",
      (e: CustomEvent) => {
        console.log("Angular catchin custom check event", e);
        this.isChecked = e.detail.isChecked;
        this.cd.detectChanges();
      }
    );
  }

  constructor(private rd: Renderer2, private cd: ChangeDetectorRef) {}
}
