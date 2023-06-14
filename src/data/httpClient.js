const API= 'https://api.themoviedb.org/'
export function get(path){
    return fetch(API+path,{
        headers:{
            Authorization:'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZGM4NjYwMzg3ZjJlMmMzZjRkMzM4ZjFlNzM4ZjM1YyIsInN1YiI6IjY0ODlmZjQ3OTkyNTljMDEzOTJkYzRkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.a0BJXynLV9C7AvyQNc2wLH0k7W151SLopoob4T45pEI',
            'Context-Type':'aplication/json.charset=utf8'
        }
    })
}