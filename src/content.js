import logo from './assets/logo/11098981.png'


// hero 
import videohero from './assets/video/ocean.mp4'

import Img1 from './assets/photos/beach-4865786_1280.jpg'
import Img2 from './assets/photos/hong-kong-4046913_1280.jpg'
import Img3 from './assets/photos/moscow-1556561_1280.jpg'
import Img4 from './assets/photos/mountains-5526265_1280.jpg'
import Img5 from './assets/photos/nature-3733115_1280.jpg'
import Img6 from './assets/photos/lake-6476212_1280.jpg'

import img7 from './assets/photos/home_2.jpg'
import img8 from './assets/photos/home_3.jpg'
import img9 from './assets/photos/home_4.jpg'
import { FaCompass, FaPiggyBank, FaQuestionCircle, FaShieldAlt } from 'react-icons/fa'



export const content= {

    nav:{

        offer:{
            off1:"20% off on next booking",
            off2:"mobile no. +91 123456789"
        },
        logo:logo,
        btnText:'Book Now',
        NavLinks:[
            {
              name: "Home",
              link: "/",
            },
            {
              name: "About",
              link: "/about",
            },
            {
              name: "Blogs",
              link: "/blogs",
            },
            {
              name: "Best Places",
              link: "/best-places",
            },
          ],
          
           DropdownLinks : [
            {
              name: "Our Services",
              link: "/#services",
            },
            {
              name: "Top Brands",
              link: "/#mobile_brands",
            },
            {
              name: "Location",
              link: "/#location",
            },
          ],

    },
    hero:{
      title:"",
      subtitle:"",
      video:videohero,
    },
    places:{
      PlacesData : [
        {
          img: Img1,
          title: "Boat",
          location: "USA",
          description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
          price: 6700,
          type: "Cultural Relax",
        },
        {
          img: Img2,
          title: "Taj Mahal",
          location: "India",
          description:
            "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
          price: 6700,
          type: "Cultural Relax",
        },
        {
          img: Img3,
          title: "Underwater",
          location: "US",
          description:
            "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
          price: 6200,
          type: "Cultural Relax",
        },
        {
          img: Img4,
          title: "Sydney",
          location: "USA",
          description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
          price: 6700,
          type: "Cultural Relax",
        },
        {
          img: Img5,
          title: "Los Angeles",
          location: "United states",
          description:
            "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
          price: 6700,
          type: "Cultural Relax",
        },
        {
          img: Img6,
          title: "Los Vegas",
          location: "California",
          description:
            "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
          price: 6200,
          type: "Cultural Relax",
        },
      ]
    },
    blogs:{
      BlogsData : [
        {
          id: 1,
          image: Img1,
          title: "Top places to visit in India",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. At eligendi blanditiis veniam suscipit, consequatur assumenda recusandae nostrum reiciendis eaque inventore sed repellat tenetur id quia deleniti veritatis pariatur dignissimos voluptatum maiores, praesentium neque. Expedita eos animi voluptas sit enim officia commodi quaerat cupiditate necessitatibus placeat. Et adipisci in minus, est reprehenderit optio soluta voluptate dolorum. Ipsa neque dolorem voluptate expedita incidunt autem facere qui nam magni impedit et, laboriosam nesciunt deserunt molestiae? Illum ex quasi quam aut cum voluptate enim fugiat amet laboriosam quas debitis, consequuntur vel est dolorem molestiae recusandae corrupti distinctio, ipsam sunt vero id deleniti minus autem eaque! Ad optio asperiores quibusdam earum autem cupiditate alias in eius, perspiciatis accusamus recusandae tempora facilis modi placeat dolore natus minima excepturi temporibus impedit quis? Repudiandae minus temporibus vel ipsum dolorum quos! Quia ullam neque possimus ipsam illo odio necessitatibus dolorum sed tenetur harum saepe impedit veniam in praesentium eum asperiores quaerat ducimus illum beatae sapiente vero, eligendi autem reiciendis recusandae. Voluptatibus vero quo a deleniti eveniet. Laboriosam, molestias vitae quos maiores alias dolorum iste quae dolor possimus perspiciatis ipsum. Neque harum ducimus fugit id? Recusandae perferendis dicta quo nobis enim non velit culpa harum officia accusantium sint, aspernatur doloribus! Sed, perspiciatis. Error expedita eligendi beatae? Soluta mollitia ut ullam assumenda ex nulla a inventore? Obcaecati, excepturi. Blanditiis veritatis quia soluta distinctio corporis atque. Vero illum quod aliquam beatae possimus animi, in, fuga incidunt inventore sunt reiciendis dolore magni obcaecati? Commodi deleniti quasi ex est vel omnis ipsam enim laborum dignissimos. Ut porro, excepturi quibusdam corrupti vitae minus eaque iste ipsam quo sit. Earum, recusandae! Ipsa, accusantium! Quo non, voluptatem molestiae maiores voluptas repellat cupiditate optio voluptates atque culpa dignissimos unde earum eos et corporis laudantium pariatur. Facere beatae, rem suscipit unde fugiat, atque accusamus in repellat earum dolor nulla?",
          author: "Someone",
          date: "April 22, 2022",
        },
        {
          id: 1,
          image: Img2,
          title: "Top places to visit in US",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. At eligendi blanditiis veniam suscipit, consequatur assumenda recusandae nostrum reiciendis eaque inventore sed repellat tenetur id quia deleniti veritatis pariatur dignissimos voluptatum maiores, praesentium neque. Expedita eos animi voluptas sit enim officia commodi quaerat cupiditate necessitatibus placeat. Et adipisci in minus, est reprehenderit optio soluta voluptate dolorum. Ipsa neque dolorem voluptate expedita incidunt autem facere qui nam magni impedit et, laboriosam nesciunt deserunt molestiae? Illum ex quasi quam aut cum voluptate enim fugiat amet laboriosam quas debitis, consequuntur vel est dolorem molestiae recusandae corrupti distinctio, ipsam sunt vero id deleniti minus autem eaque! Ad optio asperiores quibusdam earum autem cupiditate alias in eius, perspiciatis accusamus recusandae tempora facilis modi placeat dolore natus minima excepturi temporibus impedit quis? Repudiandae minus temporibus vel ipsum dolorum quos! Quia ullam neque possimus ipsam illo odio necessitatibus dolorum sed tenetur harum saepe impedit veniam in praesentium eum asperiores quaerat ducimus illum beatae sapiente vero, eligendi autem reiciendis recusandae. Voluptatibus vero quo a deleniti eveniet. Laboriosam, molestias vitae quos maiores alias dolorum iste quae dolor possimus perspiciatis ipsum. Neque harum ducimus fugit id? Recusandae perferendis dicta quo nobis enim non velit culpa harum officia accusantium sint, aspernatur doloribus! Sed, perspiciatis. Error expedita eligendi beatae? Soluta mollitia ut ullam assumenda ex nulla a inventore? Obcaecati, excepturi. Blanditiis veritatis quia soluta distinctio corporis atque. Vero illum quod aliquam beatae possimus animi, in, fuga incidunt inventore sunt reiciendis dolore magni obcaecati? Commodi deleniti quasi ex est vel omnis ipsam enim laborum dignissimos. Ut porro, excepturi quibusdam corrupti vitae minus eaque iste ipsam quo sit. Earum, recusandae! Ipsa, accusantium! Quo non, voluptatem molestiae maiores voluptas repellat cupiditate optio voluptates atque culpa dignissimos unde earum eos et corporis laudantium pariatur. Facere beatae, rem suscipit unde fugiat, atque accusamus in repellat earum dolor nulla?",
          author: "Someone",
          date: "April 22, 2022",
        },
        {
          id: 1,
          image: Img3,
          title: "Top places to visit in Japan",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. At eligendi blanditiis veniam suscipit, consequatur assumenda recusandae nostrum reiciendis eaque inventore sed repellat tenetur id quia deleniti veritatis pariatur dignissimos voluptatum maiores, praesentium neque. Expedita eos animi voluptas sit enim officia commodi quaerat cupiditate necessitatibus placeat. Et adipisci in minus, est reprehenderit optio soluta voluptate dolorum. Ipsa neque dolorem voluptate expedita incidunt autem facere qui nam magni impedit et, laboriosam nesciunt deserunt molestiae? Illum ex quasi quam aut cum voluptate enim fugiat amet laboriosam quas debitis, consequuntur vel est dolorem molestiae recusandae corrupti distinctio, ipsam sunt vero id deleniti minus autem eaque! Ad optio asperiores quibusdam earum autem cupiditate alias in eius, perspiciatis accusamus recusandae tempora facilis modi placeat dolore natus minima excepturi temporibus impedit quis? Repudiandae minus temporibus vel ipsum dolorum quos! Quia ullam neque possimus ipsam illo odio necessitatibus dolorum sed tenetur harum saepe impedit veniam in praesentium eum asperiores quaerat ducimus illum beatae sapiente vero, eligendi autem reiciendis recusandae. Voluptatibus vero quo a deleniti eveniet. Laboriosam, molestias vitae quos maiores alias dolorum iste quae dolor possimus perspiciatis ipsum. Neque harum ducimus fugit id? Recusandae perferendis dicta quo nobis enim non velit culpa harum officia accusantium sint, aspernatur doloribus! Sed, perspiciatis. Error expedita eligendi beatae? Soluta mollitia ut ullam assumenda ex nulla a inventore? Obcaecati, excepturi. Blanditiis veritatis quia soluta distinctio corporis atque. Vero illum quod aliquam beatae possimus animi, in, fuga incidunt inventore sunt reiciendis dolore magni obcaecati? Commodi deleniti quasi ex est vel omnis ipsam enim laborum dignissimos. Ut porro, excepturi quibusdam corrupti vitae minus eaque iste ipsam quo sit. Earum, recusandae! Ipsa, accusantium! Quo non, voluptatem molestiae maiores voluptas repellat cupiditate optio voluptates atque culpa dignissimos unde earum eos et corporis laudantium pariatur. Facere beatae, rem suscipit unde fugiat, atque accusamus in repellat earum dolor nulla?",
          author: "Someone",
          date: "April 22, 2022",
        },
      ]
      
    },
    testimonial:{
      testimonialData : [
        {
          id: 1,
          name: "Samuel",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
          img: img9,
        },
        {
          id: 1,
          name: "John Doe",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
          img: img7,
        },
        {
          id: 1,
          name: "Smith",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
          img: img8,
        },
      ]
    },
    about:[
      {
        title:'Proper Guide',
        info:"We help you to choose your best option of packages as per your convinience.",
        icon:<FaShieldAlt className=' w-10 h-10 text-primaryColor'/>
      },
      {
        title:'Save Money',
        info:"We hane varrious price range in same packages to make the economical to you.",
        icon:<FaPiggyBank className=' w-10 h-10 text-primaryColor'/>
      },
      {
        title:'Stay Safe',
        info:"We help you to choose your best option of packages as per your convinience.",
        icon:<FaCompass className=' w-10 h-10 text-primaryColor'/>
      },
      {
        title:'Get Help',
        info:"We help you to choose your best option of packages as per your convinience.",
        icon:<FaQuestionCircle className=' w-10 h-10 text-primaryColor'/>
      },
     
    ]
   
}