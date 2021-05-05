//a

Array.prototype.myMap = function (callback) {
	let newArr = [];
	let i = 0
	while (i < this.length ){
		let elem = callback(this[i], i, this);
	    newArr.push(elem);
		i++
	}
	
	return newArr;
  };
  
	let arr = [1, 2, 3];
	console.log(arr.myMap(e => e + 2));


//b 
let newReleases = [{
	id: 70111470,
	title: "Die Hard",
	boxart: "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
	url: "http://api.netflix.com/catalog/titles/movies/70111470",
	rating: [4.0],
	bookmark: []
}, {
	id: 654356453,
	title: "Bad Boys",
	boxart: "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
	url: "http://api.netflix.com/catalog/titles/movies/70111470",
	rating: [5.0],
	bookmark: [{ id: 432534, time: 65876586 }]
}, {
	id: 65432445,
	title: "The Chamber",
	boxart: "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
	uri: "http://api.netflix.com/catalog/titles/movies/70111470",
	rating: [4.0],
	bookmark: []
}, {
	id: 675465,
	title: "Fracture",
	boxart: "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
	url: "http://api.netflix.com/catalog/titles/movies/70111470",
	rating: [5.0],
	bookmark: [{ id: 432534, time: 65876586 }]
	
}];

console.log(newReleases)
// не понимаю немного, что нужно изменить, если у него и так необходимый вид { id: …, title: … }. 
// 0: {id: 70111470, title: "Die Hard", boxart: "http://cdn-0.nflximg.com/images/2891/DieHard.jpg", url: "http://api.netflix.com/catalog/titles/movies/70111470", rating: Array(1), …}
//1: {id: 654356453, title: "Bad Boys", boxart: "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg", url: "http://api.netflix.com/catalog/titles/movies/70111470", rating: Array(1), …}
//2: {id: 65432445, title: "The Chamber", boxart: "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg", uri: "http://api.netflix.com/catalog/titles/movies/70111470", rating: Array(1), …}
//3: {id: 675465, title: "Fracture", boxart: "http://cdn-0.nflximg.com/images/2891/Fracture.jpg", url: "http://api.netflix.com/catalog/titles/movies/70111470", rating: Array(1), …}
//length: 4

//в

Array.prototype.myFilter = function (callback) {
	let newArr = [];
	let i = 0
	while (i < this.length ){
		if (callback(this[i], i, this)) {
			 newArr.push(this[i]);
		}
		i++
	}
	
	return newArr;
  };
  
	let arr1 = [1, 2, 3];
	console.log(arr1.myFilter(e => e > 2));

//g
let ids = newReleases.myFilter(vid => {
    return vid.rating == 5.0;
})
let ids2 = ids.myMap (vid => {
    return { id: vid.id } 
})
  
console.log(ids);

//d
let movieLists = [{
	name: "Instant Queue",
	videos : [{
		"id": 70111470,
		"title": "Die Hard",
		"boxarts": [{
			width: 150,
			height: 200,
			url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg"
			}, {
			width: 200,
			height: 200,
			url: "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" 
}],
		"url": "http://api.netflix.com/catalog/titles/movies/70111470",
		"rating": 4.0,
		"bookmark": []
	}, {
		"id": 654356453,
		"title": "Bad Boys",
		"boxarts": [{
			width: 200,
			height: 200,
			url: "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg"
			}, {
			width: 150,
			height: 200,
			url: "http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg"
}],
		"url": "http://api.netflix.com/catalog/titles/movies/70111470",
		"rating": 5.0,
		"bookmark": [{ id: 432534, time: 65876586 }]
	}]
}, {
	name: "New Releases",
	videos: [{
		"id": 65432445,
		"title": "The Chamber",
		"boxarts": [{
			width: 150,
			height: 200,
			url: "http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg"
			}, {
			width: 200,
			height: 200,
			url: "http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" 
}],
		"url": "http://api.netflix.com/catalog/titles/movies/70111470",
		"rating": 4.0,
		"bookmark": []
	}, {
		"id": 675465,
		"title": "Fracture",
		"boxarts": [{
			width: 200,
			height: 200,
			url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg"
			}, {
			width: 150,
			height: 200,
			url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg"
			}, {
			width: 300,
			height: 200,
			url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg"
}],
		"url": "http://api.netflix.com/catalog/titles/movies/70111470",
		"rating": 5.0,
		"bookmark": [{ id: 432534, time: 65876586 }]
	}]
}];

// let movie =  
// return movieLists.map(function (category) {
// 	return category.videos.map(function (video) {
// 		return {
// 			id: video.id,
// 			title: video.title,
// 			boxart: video.boxarts.filter(function (boxartFeature) {
// 				return boxartFeature.width === 150 && boxartFeature.height === 200;
// 			})
// 				.map(function (boxartProp) {
// 				return boxartProp.url;
// 			})
// 		};
// 	}).concatAll();
// }).concatAll();

let movie = movieLists.myMap(movieList => {
	return movieList.videos.myMap(video => {
	return video.boxarts.myFilter(boxart => {
	  return boxart.width === 150
	}).myMap(boxart => {
	   return {'id':video.id , 'title': video.title, boxart: boxart.url}
	}) 
	 }).concatAll()
  })

console.log(movie)