export type GardenJournalPhoto = {
  file: string
  alt: string
  caption: string
}

export type GardenJournalEntry = {
  date: string
  displayDate: string
  note: string
  photos: GardenJournalPhoto[]
}

export const latestGarden: GardenJournalEntry = {
  date: '2026-10-17',
  displayDate: 'October 17, 2026',
  note: 'Calendulas, cosmos, sunflowers, and nasturtiums are still flowering. Open blooms, buds, and spent heads share the garden. These five photographs are selected from the October 17 journal archive.',
  photos: [
    {
      file: 'IMG_0702.jpeg',
      alt: 'Orange and yellow calendula flowers with green developing seed heads beside the garden fence.',
      caption: 'Calendula / flowers and developing seeds',
    },
    {
      file: 'IMG_0705.jpeg',
      alt: 'A bright-yellow sunflower with a dark center and water droplets on its petals.',
      caption: 'Sunflower / yellow rays and water droplets',
    },
    {
      file: 'IMG_0711.jpeg',
      alt: 'Two golden-orange nasturtium flowers surrounded by round green leaves.',
      caption: 'Nasturtium / flowers and shield-shaped leaves',
    },
    {
      file: 'IMG_0714.jpeg',
      alt: 'Pink cosmos flowers and an aging flower head growing beside a wire fence.',
      caption: 'Cosmos / open and aging flowers',
    },
    {
      file: 'IMG_0722.jpeg',
      alt: 'A pale-yellow sunflower with a dark central disc and some brown petal edges.',
      caption: 'Sunflower / pale rays and an open head',
    },
  ],
}
