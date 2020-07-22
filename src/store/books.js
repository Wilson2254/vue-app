export default {
    state: {
        books: [{
                id: '1234',
                title: 'Гарри Поттер и философский камень - 1',
                description: 'Первая глава первой книги о Гарри Поттере',
                image: 'gfdgdfg',
                level: ['B2', 'C1'],
                rating: 4,
                ratingsCount: 100,
                parts: [{
                        id: 'aaa1',
                        title: 'Part 1'
                    },
                    {
                        id: 'aaa2',
                        title: 'Part 2'
                    },
                    {
                        id: 'aaa3',
                        title: 'Part 3'
                    },
                    {
                        id: 'aaa4',
                        title: 'Part 4'
                    },
                ]
            },
            {
                id: '1fdgh234',
                title: 'Гарри Поттер и философский камень - 2',
                description: 'Вторая глава первой книги о Гарри Поттере',
                image: 'gfsggfdsa',
                level: ['B1', 'B2'],
                rating: 3.5,
                ratingsCount: 55,
                parts: [{
                        id: 'aaa1',
                        title: 'Part 1'
                    },
                    {
                        id: 'aaa2',
                        title: 'Part 2'
                    },
                    {
                        id: 'aaa3',
                        title: 'Part 3'
                    },
                    {
                        id: 'aaa4',
                        title: 'Part 4'
                    },
                ]
            },
            {
                id: '1fd3411523gah234',
                title: 'Гарри Поттер и философский камень - 3',
                description: 'Третья глава первой книги о Гарри Поттере',
                image: '11457gfsggfdsa',
                level: ['A2'],
                rating: 2,
                ratingsCount: 80,
                parts: [{
                        id: 'aaa1',
                        title: 'Part 1'
                    },
                    {
                        id: 'aaa2',
                        title: 'Part 2'
                    },
                    {
                        id: 'aaa3',
                        title: 'Part 3'
                    },
                    {
                        id: 'aaa4',
                        title: 'Part 4'
                    },
                ]
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