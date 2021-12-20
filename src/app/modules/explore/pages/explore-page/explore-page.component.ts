import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-explore-page',
  templateUrl: './explore-page.component.html',
  styleUrls: ['./explore-page.component.css']
})
export class ExplorePageComponent implements OnInit {

  exploreCategories1: any = [
    {
      imgUrl: 'https://images.pexels.com/photos/426976/pexels-photo-426976.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      title: 'Pop'
    },
    {
      imgUrl: 'https://images.pexels.com/photos/34071/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      title: 'Balada'
    },
    {
      imgUrl: 'https://images.pexels.com/photos/1045534/pexels-photo-1045534.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      title: 'Reggaeton'
    },
    
    
  ]

  exploreCategories2: any = [
    {
      imgUrl: 'https://images.pexels.com/photos/270789/pexels-photo-270789.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      title: 'Salsa'
    },
    {
      imgUrl: 'https://images.pexels.com/photos/811838/pexels-photo-811838.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      title: 'Metal'
    },
  ]

  exploreCategories3: any = [
    {
      imgUrl: 'https://images.pexels.com/photos/375893/pexels-photo-375893.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      title: 'Rock'
    },
    {
      imgUrl: 'https://images.pexels.com/photos/4817592/pexels-photo-4817592.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      title: 'Regional mexicano'
    },
  ]

  constructor( private router: Router ) { }

  ngOnInit(): void {
  }

  viewCategorie(item: any) {
    this.router.navigate(['/explore/categorie'], { queryParams: { categorie: item.title } })
  }
  
}
