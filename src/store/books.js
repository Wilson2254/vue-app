export default {
    state: {
        books: [{
                id: '1234',
                title: 'Harry Potter and the Philosopher`s Stone - 1',
                description: 'Первая глава первой книги о Гарри Поттере',
                image: 'gfdgdfg',
                parts: 7,
                level: ['B2', 'C1'],
                rating: 4,
                ratingsCount: 100,
            },
            {
                id: '1fdgh234',
                title: 'Harry Potter and the Philosopher`s Stone - 2',
                description: 'Вторая глава первой книги о Гарри Поттере',
                image: 'gfsggfdsa',
                parts: 7,
                level: ['B1', 'В2'],
                rating: 3.5,
                ratingsCount: 55,
            },
            {
                id: '1fd3411523gah234',
                title: 'Harry Potter and the Philosopher`s Stone - 3',
                description: 'Третья глава первой книги о Гарри Поттере',
                image: '11457gfsggfdsa',
                parts: 7,
                level: ['A2'],
                rating: 2,
                ratingsCount: 80,
            },
        ]
    },
    mutations: {
        set_books(state, payload) {
            state.books = payload;
        },
    },
    getters: {
        getBooks: (state) => state.books,
    },
}