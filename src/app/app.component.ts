import { Component, OnInit , AfterViewInit} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit{
  public title = 'Home';

  constructor(private breakpointObserver: BreakpointObserver, private activatedRoute: ActivatedRoute, private router: Router) {}

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    ngOnInit(): void {
      console.log('----------------');
      this.title = 'ssfda';
    }

    ngAfterViewInit(): void {
      console.log('----------------');
      this.activatedRoute.data.subscribe(
        res => console.log( res ),
        err => console.error('Observer got an error: ' + err)
      );
      console.log('----------------');
      console.log(this.router.url);
    }

}
