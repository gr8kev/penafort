// src/app/about/our-story/page.tsx
export default function OurStory() {
    return (
      <div className="container mx-auto px-4 py-8 ">
        <h1 className="text-3xl font-bold pt-10">Our Story</h1>

        <div className=" pt-7 grid grid-cols-2 items-center gap-5">
            <img src="/images/wineBanner5.png" alt="" />
            <p className="mt-4 text-gray-700">
          Welcome to Pernafort Winery! Here, we focus on bringing you the finest wines
          with an exquisite taste. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
           Illo neque iste excepturi veniam, tempora laborum quos laudantium asperiores vero 
           suscipit ullam voluptas quis consequatur id aliquam rerum quia consequuntur quas!
           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio aliquid dolor 
           magni voluptatibus labore necessitatibus doloremque animi beatae voluptas id,
            exercitationem deleniti tempore alias sed reprehenderit et harum error earum.
        </p>
        </div>

        {/* Add more content about your story here */}
      </div>
    );
  }
  