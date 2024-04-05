import craft1 from "/public/craft1.jpg";
import craft2 from "/public/craft2.jpg";
import dance1 from "/public/dance1.jpg";
import indoor1 from "/public/indoor1.jpg";
import language1 from "/public/language1.jpg";
import music1 from "/public/music1.jpg";
import music2 from "/public/music2.jpg";
import sport1 from "/public/sports1.jpg";

export const data = {
  All: [],
  Music: [
    {
      id: 6,
      title: "Music Class",
      des: "Amet mattis vulputate enim nulla aliquet porttitor lacus luctus.Orci ac auctor augue mauris augue.",
      price: "$40",
      rating: 4,
      src: music1,
    },
    {
      id: 7,
      title: "Orchestra Player",
      des: "Leo urna molestie at elementum eu. Duis at consectetur lorem donec massa sapien.",
      price: "$60",
      rating: 4,
      src: music2,
    },
  ],
  Language: [
    {
      id: 8,
      title: "Math League",
      des: "Gravida cum sociis natoque penatibus. Enim nec dui nunc mattis enim ut.",
      price: "$36",
      rating: 5,
      src: language1,
    },
  ],
  Craft: [
    {
      id: 9,
      title: "Painting Class",
      des: "Elit pellentesque habitant morbi tristique senectus et netus et Etiam dignissim diam quis.",
      price: "$70",
      rating: 4,
      src: craft1,
    },
    {
      id: 10,
      title: "Art Club",
      des: "Convallis a cras semper auctor neque vitae. Malesuada nunc vel risus commodo viverra.",
      price: "$55",
      rating: 5,
      src: craft2,
    },
  ],
  Dance: [
    {
      id: 11,
      title: "Western Dance Class",
      des: "Dapibus ultrices in iaculis nunc sed augue lacus. Tortor id aliquet lectus proin. Nulla porttitor massa.",
      price: "$40",
      rating: 4,
      src: dance1,
    },
  ],
  Sports: [
    {
      id: 12,
      title: "Kids Playing Club",
      des: "Hac habitasse platea dictumst vestibulum rhoncus est. Pulvinar sapien et ligula.",
      price: "$55",
      rating: 5,
      src: sport1,
    },
  ],
  Indoor: [
    {
      id: 13,
      title: "Engineering Class",
      des: "Nascetur ridiculus mus mauris vitae ultricies leo. Eget arcu dictum varius duis at.",
      price: "$55",
      rating: 4,
      src: indoor1,
    },
  ],
};
