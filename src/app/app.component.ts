import { Component, OnInit , DoCheck} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, DoCheck{
  public title = 'Home';

  constructor(private breakpointObserver: BreakpointObserver, private activatedRoute: ActivatedRoute, private router: Router) {}

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  ngOnInit(): void {
  }

  ngDoCheck(): void {
     this.title = this.router.url.split('/')[this.router.url.split('/').length - 1].toUpperCase(); // 临时解决 title显示问题
     if (this.title === '') {this.title = 'Welcome' ; }
  }

}
