# NETFLIX 영화 사이트


NETFLIX 사이트를 참고하여 React Redux, Redux Middleware를 이용한 반응형 영화 웹페이지 구축

![NETFLIX](https://user-images.githubusercontent.com/110072947/221752839-51ac3a65-b126-448e-a9a4-7436104c0b35.png)

+ Demo : https://netflix-movie-eight.vercel.app/

<br/>
<br/>

### 개발 목표

데이터가 실존하는 api를 사용하여 영화 웹페이지를 구축 및 React Redux, Redux Middleware 이해를 통한 개발

각 페이지 내에 컴포넌트를 추가하여 해당 내용의 재사용성, 편리성을 보안하여 개발

<br/>
<br/>

### 사용 기술

<a href="#"><img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white"/></a>
<a href="#"><img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white"/></a>
<a href="#"><img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/></a>
<a href="#"><img src="https://img.shields.io/badge/React Router-CA4245?style=flat-square&logo=React Router&logoColor=white"/></a>
<a href="#"><img src="https://img.shields.io/badge/Redux-764ABC?style=flat-square&logo=Redux&logoColor=white"/></a>
<a href="#"><img src="https://img.shields.io/badge/Bootstrap-7952B3?style=flat-square&logo=Bootstrap&logoColor=white"/></a>

<br/>
<br/>

### Advanced Feature

+ 사이트를 들어가 로딩될 때 로딩스피너를 통해 유저가 기다릴 동안의 불편함을 해소

![NETFLIX](https://user-images.githubusercontent.com/110072947/221754217-a48a6c69-d6a2-4caa-a84f-fd21fe0d694b.png)

```javascript
if (loading) {
    return <div className='loading'><ClipLoader color="fff" loading={loading} size={150} /></div>
  };
```

<br/>

+ npm을 사용하여 카테고리별 영화 슬라이드를 개발 및 마우스 오버 시 이벤트 추가

![NETFLIX](https://user-images.githubusercontent.com/110072947/221755042-9dd0cbad-51fd-4ab1-bf24-9adff5c7358f.png)

```javascript
...
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const MovieSlide = ({movies}) => {

  return (
    <Carousel responsive={responsive}>
      {movies.results.map((item) => (<MovieCard item={item}/>))}
    </Carousel>
  )
};
...
```

<br/>

+ 영화 키워드 검색 시 해당 키워드에 관련된 영화 페이지가 나오도록 개발

![NETFLIX](https://user-images.githubusercontent.com/110072947/221755513-1fa3efe8-02f1-4280-ab72-3da88b197da3.png)

<br/>

+ 영화 페이지에서 장르 클릭 시 해당 장르에 관련된 영화 페이지가 나오도록 개발

![NETFLIX](https://user-images.githubusercontent.com/110072947/221757466-d5b727ab-35bb-46f9-97d6-9cc29d6ff0fa.png)

<br/>

+ 영화 페이지 아래 부분에 페이지네이션 개발

<a href="#"><img src="https://user-images.githubusercontent.com/110072947/221759603-36fd1a28-b61d-4afe-8124-ce5b210c8d38.png" width="400"/></a>
<a href="#"><img src="https://user-images.githubusercontent.com/110072947/221759562-b5f5f3d6-2360-4bb4-a584-1899c36f9f20.png" width="400"/></a>

<br/>

+ 영화 검색 시 디테일 페이지(왼쪽)로 넘어가며, 해당 내용에서 영화 트레일러(오른쪽) 등의 자세한 정보가 나오도록 개발

<a href="#"><img src="https://user-images.githubusercontent.com/110072947/221757737-71e5e8fa-ab52-49f1-a8ff-bd7c6a49da0d.png" width="400"/></a>
<a href="#"><img src="https://user-images.githubusercontent.com/110072947/221757709-7db08836-e603-4c88-88a0-7771010c797b.png" width="400"/></a>

<br/>

+ 디테일 페이지 아래에 해당 영화의 리뷰(왼쪽)와 관련 영화들(오른쪽)을 볼 수 있도록 개발

<a href="#"><img src="https://user-images.githubusercontent.com/110072947/221759098-ebe56798-346b-469a-a804-4f578a367c32.png" width="400"/></a>
<a href="#"><img src="https://user-images.githubusercontent.com/110072947/221759071-8403e4ec-053a-4e41-93b4-7b5444a97a20.png" width="400"/></a>

<br/>

+ React Bootstrap과 Media Query를 이용한 반응형 웹페이지 개발

[Web ver.]

<a href="#"><img src="https://user-images.githubusercontent.com/110072947/221755042-9dd0cbad-51fd-4ab1-bf24-9adff5c7358f.png" width="250"/></a>
<a href="#"><img src="https://user-images.githubusercontent.com/110072947/221757737-71e5e8fa-ab52-49f1-a8ff-bd7c6a49da0d.png" width="250"/></a>
<a href="#"><img src="https://user-images.githubusercontent.com/110072947/221757466-d5b727ab-35bb-46f9-97d6-9cc29d6ff0fa.png" width="250"/></a>

[Mobile ver.]

<a href="#"><img src="https://user-images.githubusercontent.com/110072947/221760293-8d383358-0946-4cc2-9bb3-7b29fdeb8b7a.png" width="250"/></a>
<a href="#"><img src="https://user-images.githubusercontent.com/110072947/221760258-a6615c90-aa1c-491a-86c0-3e567b7e54a2.png" width="250"/></a>
<a href="#"><img src="https://user-images.githubusercontent.com/110072947/221760238-c145bc43-55d0-4d5c-a5b5-20484e28d225.png" width="250"/></a>

<br/>
<br/>

# 개선 사항

+ 처음에 관련 영화 버튼 클릭 시 한박자 늦게 로딩되는 부분에 대한 해결 필요

+ 영화 검색 또는 영화 페이지에서 장르를 선택한 후의 결과값이 계속 남아있는 부분에 대한 해결 필요










