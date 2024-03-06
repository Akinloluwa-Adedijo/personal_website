const geog351pdf = "../src/assets/GEOG351_Mini_Project_Brochure.pdf";
const geog355pdf = "../src/assets/geog355.pdf";
const geog451pdf =
  "../src/assets/geog451_final_proj_adedijo_matheson_pegram.pdf";
import geog351_image from "../src/assets/geog351_mini_proj_screenshot.png";
import geog355_image from "../src/assets/geog355_screenshot.png";
import geog356_image from "../src/assets/geog356_screenshot.png";
import geog457_image from "../src/assets/geog457_screenshot.png";
import geog451_image from "../src/assets/geog451_screenshot.png";

export const projects = [
  {
    id: 1,
    title: "Essential Services in Vancouver",
    category: "gis",
    heading1: "Overview",
    collaborators: {},
    p1: "The Essential Services is a web mapping application that provides users with the ability to locate essential facilities around Vancouver.",
    p2: "This Webapp was made using ArcGIS Online which is a cloud based mapping platform for the creation of maps, analysis of data which can be shared to the public accessed from any device.",
    heading2: "Tools Used",
    p3: "ArcGIS Online",
    project_details: {
      title: "Access the Essential Services Website and Brochure",
      link: "https://simonfraseru.maps.arcgis.com/apps/webappviewer/index.html?id=af7fd55c905a4a719292c820678cb1d7",
      document: geog351pdf,
      additional_media: {
        images: [geog351_image],
      },
    },
  },
  {
    id: 2,
    title:
      "Suitable Areas for MCE Analysis for Afforestation in Burnaby, BC Native tree Species",
    category: "gis",
    heading1: "Overview",
    collaborators: {
      name: "Spirit Mayo",
      link: "https://ca.linkedin.com/in/spirit-mayo-8735b9206",
    },
    p1: "Using native tree species of Burnaby British Columbia as the premise of a multicriteria evaluation with a weighted linear combination approach, is the basis of this analysis. Geographical Information Systems provides a platform to geospatially model a suitability map of the relevant factors and constraints of a semi-rural area to potential afforestation efforts. The results are comprised of the total available area including precise locations using the MCE module within TERRSET geospatial modelling software. The analysis specifically considers factors and constraints in relation to: biogeoclimatic zone, prominent native species, and municipal regulations (zoning laws). ",
    p2: "My role in this project involved : data acquisition, transformation and performing the Multi Criteria Evaluation and Analysis. ",
    heading2: "Tools Used",
    p3: "Terrset 2020",
    project_details: {
      title: "Access the full paper:",
      link: "",
      document: geog355pdf,
      additional_media: {
        images: [geog355_image],
      },
    },
  },
  {
    id: 3,
    title:
      "Modelling the Feasibility of Mass Evacuations in High Rise Buildings using Unity",
    category: "gis",
    heading1: "Overview",
    collaborators: {},
    p1: "Using Game Engine and Artificial Intelligence agents to simulate people evacuating a high-rise building gives rise to the ability to model mass evacuation scenarios and their impact on the individuals living in such buildings. The result of using these technologies aims to highlight the possibilities, provide insights, and make conclusions on the evacuation strategies of high-rise buildings.",
    p2: "The vast presence of high-rise buildings in metro Vancouver is not something to be in awe of. With rising populations, increasing economic pressures and the high demand for sustainable practices (Koziatek et al., 2016) from urban cities and planners, high rise buildings are providing an avenue for urban cities and real estate developers to develop affordable housing whilst making a profit to potential buyers. Most of these high-rise buildings vary in height and most importantly style. But one of the most crucial factors I have always considered about these buildings is the feasibility of mass evacuations in such buildings because some have over thirty, even forty floors. How feasible are mass evacuations? How many routes for evacuations are possible? and how fast do people need to move, especially from the highest floors to the ground floors where the possible safe zone is located? ",
    heading2: "Tools & Languages Used",
    p3: "Unity",
    project_details: {
      title: "Access the visualizations produced from this project",
      link: "put link to the youtube playlist showing all videos produced",
      document: "",
      additional_media: {
        images: [geog356_image],
      },
    },
  },
  {
    id: 4,
    title:
      "Visualizing Mass Evacuation Scenarios in different Interfaces( Augmented Reality and Desktop) in Unity",
    category: "gis",
    heading1: "Overview",
    collaborators: {},
    p1: "This final project's background stems from evacuation analysis in high-rise environments. How are mass evacuations handled in such environments? How do inaccessible stairwells and other external factors impact them? Querying and simulating these environments using virtual and augmented reality offers a new avenue for experiencing such simulations.",
    p2: "The problem is understanding the processes involved in a mass evacuation scenario of a high-rise building with over ten floors by adding query tools that allow users to run different simulations. Query tools such as blocking off stairwells to agents and changing the speed of the agents are some of the capabilities of this final project. By giving users the freedom to choose which query tools to activate and deactivate, they can run multiple simulations to assess the impact of the query tools selected. Users can also view the number of agents that have reached the evacuation spot.",
    heading2: "Tools & Languages Used",
    p3: "Unity, C#",
    project_details: {
      title: "Access the visualizations produced from this project",
      link: "put link to the youtube playlist showing all videos produced",
      document: "",
      additional_media: {
        images: [geog457_image],
      },
    },
  },
  {
    id: 5,
    title:
      "Cellular Automata Modelling of the 2022 Keremeos Creek and Fry Creek Wildfires in British Columbia",
    category: "gis",
    heading1: "Overview",
    collaborators: {
      /*put kevin and jennifer emails here*/
    },
    p1: "This project uses Cellular Automata (CA) to build a model of wildfire propagation using data of wildfires in British Columbia (BC) for 2022. Our model is inspired by previous CA wildfire models, and incorporates data on fuel types, road infrastructure, and topography to make a probabilistic model of wildfire spread for given ignition points under simulated wind conditions. Our model also incorporates stochastic processes to represent wildfire spotting. The project demonstrates the ability of CA models to represent fire propagation as a macro-phenomenon emerging from local interactions. Models were run five times each to capture different outcomes given the stochastic and probabilistic transition rules. Results show that the model results in comparable size, shape, and boundaries of the recorded wildfire perimeters given the same ignition points, though each ignition point can result in vastly different model outcomes given stochastic processes. ",
    p2: "put my role in this project here",
    heading2: "Tools",
    p3: "ArcGIS Pro",
    project_details: {
      title: "Access the full paper",
      link: "",
      document: [geog451pdf],
      additional_media: {
        images: [],
      },
    },
  },
];
