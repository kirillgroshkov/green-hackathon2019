import { Component } from '@angular/core'

export interface Day {
  txt: string
  num: number
  done?: boolean
}

const days: Day[] = [
  {
    num: 1,
    txt: 'Go to local supermarket and replace 5 products with vegan options.',
    done: true,
  },
  {
    num: 2,
    txt: 'Order vegan food from Karma.',
  },
  {
    num: 3,
    txt: 'Cook this recipe.',
  },
  {
    num: 4,
    txt: 'Try vegan snacks.',
  },
  {
    num: 5,
    txt: 'Find and try vegan restaurant.',
  },
  {
    num: 6,
    txt: 'Documentary.',
  },
  {
    num: 7,
    txt: 'Goal achieved.',
  },
]

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  days = days
}
