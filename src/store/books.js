import Vue from 'vue'

export default {
    state: {
        books: [],
        // books: [{
        //         id: '1234',
        //         title: 'Гарри Поттер и философский камень - 1',
        //         description: 'Первая глава первой книги о Гарри Поттере',
        //         image: 'gfdgdfg',
        //         level: ['B2', 'C1'],
        //         rating: 4,
        //         ratingsCount: 100,
        //         youtube_playlist_id: 'fsdfsghbvc',
        //         parts: [{
        //                 id: 'aaa1',
        //                 title: 'Part 1',
        //                 youtube_id: 'fsdfsghbvfsppc',
        //             },
        //             {
        //                 id: 'aaa2',
        //                 title: 'Part 2',
        //                 youtube_id: 'fsdfsghbvfsppc',
        //             },
        //             {
        //                 id: 'aaa3',
        //                 title: 'Part 3',
        //                 youtube_id: 'fsdfsghbvfsppc',
        //             },
        //             {
        //                 id: 'aaa4',
        //                 title: 'Part 4',
        //                 youtube_id: 'fsdfsghbvfsppc',
        //             },
        //         ]
        //     },
        //     {
        //         id: '1fdgh234',
        //         title: 'Гарри Поттер и философский камень - 2',
        //         description: 'Вторая глава первой книги о Гарри Поттере',
        //         image: 'gfsggfdsa',
        //         level: ['B1', 'B2'],
        //         rating: 3.5,
        //         ratingsCount: 55,
        //         youtube_playlist_id: 'fsdfsgatlhbvc',
        //         parts: [{
        //                 id: 'aaa1',
        //                 title: 'Part 1',
        //                 youtube_id: 'fsdfsghbvfsppc',
        //             },
        //             {
        //                 id: 'aaa2',
        //                 title: 'Part 2',
        //                 youtube_id: 'fsdfsghbvfsppc',
        //             },
        //             {
        //                 id: 'aaa3',
        //                 title: 'Part 3',
        //                 youtube_id: 'fsdfsghbvfsppc',
        //             },
        //             {
        //                 id: 'aaa4',
        //                 title: 'Part 4',
        //                 youtube_id: 'fsdfsghbvfsppc',
        //             },
        //         ]
        //     },
        //     {
        //         id: '1fd3411523gah234',
        //         title: 'Гарри Поттер и философский камень - 3',
        //         description: 'Третья глава первой книги о Гарри Поттере',
        //         image: '11457gfsggfdsa',
        //         level: ['A2'],
        //         rating: 2,
        //         ratingsCount: 80,
        //         youtube_playlist_id: 'fs12ugdfsghbvc',
        //         parts: [{
        //                 id: 'aaa1',
        //                 title: 'Part 1',
        //                 youtube_id: 'fsdfsghbvfsppc',
        //             },
        //             {
        //                 id: 'aaa2',
        //                 title: 'Part 2',
        //                 youtube_id: 'fsdfsghbvfsppc',
        //             },
        //             {
        //                 id: 'aaa3',
        //                 title: 'Part 3',
        //                 youtube_id: 'fsdfsghbvfsppc',
        //             },
        //             {
        //                 id: 'aaa4',
        //                 title: 'Part 4',
        //                 youtube_id: 'fsdfsghbvfsppc',
        //             },
        //         ]
        //     },
        // ],
        // bookParts: [{
        //     bookId: '1234',
        //     bookPartId: 'aaa1',
        //     bookTitle: 'Гарри Поттер и философский камень - 1',
        //     partTitle: 'Часть 1',
        //     youtube_id: 'fff_iM1f3MI',
        //     content: [{
        //             sentences: [{
        //                     originText: 'Mr. and Mrs. Dursley, of number four, Privet Drive, were proud to say that they were perfectly normal, thank you very much.',
        //                     transText: 'Мистер и миссис Дурслей, из дома № 4 по Бирючинной улице, гордились тем, что они, спасибо преогромное, люди абсолютно нормальные.'
        //                 },
        //                 {
        //                     originText: 'They were the last people you`d expect to be involved in anything strange or mysterious, because they just didn`t hold with such nonsense.',
        //                     transText: 'Трудно было вообразить, что они окажутся замешаны в делах необычных или загадочных – они не признавали всякой там чепухи.'
        //                 }
        //             ]
        //         },
        //         {
        //             sentences: [{
        //                     originText: 'Mr. Dursley was the director of a firm called Grunnings, which made drills.',
        //                     transText: 'Мистер Дурслей работал директором фирмы «Груннингс», которая выпускала сверла.'
        //                 },
        //                 {
        //                     originText: 'He was a big, beefy man with hardly any neck, although he did have a very large mustache.',
        //                     transText: 'Он был большой, грузный мужчина почти без шеи, зато невероятно усатый.'
        //                 },
        //                 {
        //                     originText: 'Mrs. Dursley was thin and blonde and had nearly twice the usual amount of neck, which came in very useful as she spent so much of her time craning over garden fences, spying on the neighbors.',
        //                     transText: 'Миссис Дурслей, тощая блондинка, обладала шеей удвоенной длины – и очень кстати, ибо эта леди часто и подолгу шпионила через забор за соседями.'
        //                 },
        //                 {
        //                     originText: 'The Dursleys had a small son called Dudley and in their opinion there was no finer boy anywhere.',
        //                     transText: 'У Дурслеев имелся сынок по имени Дудли – и, по мнению родителей, на свет еще не рождался ребенок прекрасней.'
        //                 },
        //             ]
        //         }

        //     ],
        //     words: [{
        //             origWord: 'Hello',
        //             transWord: 'Привет',
        //         },
        //         {
        //             origWord: 'Hello1',
        //             transWord: 'Привет1',
        //         },
        //         {
        //             origWord: 'Hello2',
        //             transWord: 'Привет2',
        //         },
        //         {
        //             origWord: 'Hello3',
        //             transWord: 'Привет3',
        //         },
        //         {
        //             origWord: 'Hello4',
        //             transWord: 'Привет4',
        //         },
        //         {
        //             origWord: 'Hello5',
        //             transWord: 'Привет5',
        //         },
        //         {
        //             origWord: 'Hello6',
        //             transWord: 'Привет6',
        //         },
        //     ]
        // }]
    },
    mutations: {
        set_books(state, payload) {
            state.books = payload;
        },
    },
    actions: {
        load_books({ commit }) {
            Vue.$db.collection('books')
                .get()
                .then(querySnapshot => {
                    let books = []
                    querySnapshot.forEach(s => {
                        const data = s.data()
                        let book = {
                            id: s.id,
                            title: data.title,
                            description: data.description,
                            imageUrl: data.imageUrl,
                            level: data.level.slice(),
                            youtube_playlist_id: data.youtube_playlist_id,
                            parts: []
                        }

                        let parts = []
                        if (data.parts) {
                            data.parts.forEach(p => {
                                let part = {
                                    id: p.id,
                                    title: p.title,
                                    youtube_id: p.youtube_id
                                }
                                parts.push(part)
                            })
                        }
                        book.parts = parts

                        books.push(book)
                    });

                    commit('set_books', books)
                })
                .catch(error => console.log(error));
        }
    },
    getters: {
        getBooks: (state) => state.books,
        // getParts: (state) => state.bookParts
    },
}