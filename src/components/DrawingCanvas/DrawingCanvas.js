import React, { useState, useEffect, useRef } from "react";
import "./DrawingCanvas.css";
import square from "./img/rectangle.svg";
import Circle from "./img/circle.svg";
import Triangle from "./img/triangle.svg";
import Brush from "./img/brush.svg";
import Eraser from "./img/eraser.svg";
import ImageUploading from "react-images-uploading";
import Button from "react-bootstrap/Button";
import Background from "./img/2methord.jpg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
// import CanvasDraw from "react-canvas-draw";
import CanvasDraw from "../../draw/index";
import html2PDF from 'jspdf-html2canvas';

// import { fileDownload} from 'react-file-download';
// var fileDownload = require();

const ids = ['1'];

const DrawingCanvas = () => {
    
  const [state, setState] = useState({
    color: "#ff0000",
    width: 600,
    height: 600,
    brushRadius: 1,
    lazyRadius: 2,
    backgroundImg:
      "https://upload.wikimedia.org/wikipedia/commons/a/a1/Nepalese_Mhapuja_Mandala.jpg",
  });

  const cavasRef = useRef();
  const [saveData, setSaveData] = useState("");
  const saveableCanvas = useRef();
  const [images, setImages] = useState([]);
  const [getImage, SetGetImage] = useState([]);
  const [breshColor,setBreshColor]= useState("#ff0000");
  const [breshsize,setBreshsize] = useState(2)
//   const [color,setColor]= useState("#4A98F7");
  const maxNumber = 69;

  var fileType = "png";
  var backgroundColour = "red";
  var useBgImage =`${state.imgSrc}`;
//   var useBgImage =``;
//   var useBgImage ="getImage?.data_url";

  const onChange = (imageList, addUpdateIndex) => {
    setImages(imageList);
    // console.log("images = ", images);
  };

  var sectionStyle = {
    // backgroundImage: `url(${Background})`,
    backgroundImage: `url(${getImage.data_url})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "contain",
    width: "50%",
    height: "100vh",
    backgroundSize: "100%",
    // backgroundImage: `url(${getImage.data_url})`,
  };

  const load = () => {
    console.log("load==");
    setState({
      color: breshColor,
      width: 800,
      height: 800,
      brushRadius: breshsize,
      lazyRadius: 2,
      backgroundImg: getImage.data_url,
      imgSrc: getImage.data_url,
    });
  };

  const clear = () => {
    let a = saveableCanvas.current;
    console.log("current fun = ", a);

    let clear = saveableCanvas.current.clear();
    console.log("clear==");
    setState({
      color: breshColor,
      width: 300,
      height: 300,
      brushRadius: 1,
      lazyRadius: 2,
      backgroundImg:
        "https://upload.wikimedia.org/wikipedia/commons/a/a1/Nepalese_Mhapuja_Mandala.jpg",
    });
  };

  const handleChartDownload = (saveableCanvas) => {
    const chartCanvas = saveableCanvas.current.canvas;

    if (chartCanvas) {
      console.log(chartCanvas)
      const url = chartCanvas.drawing.toDataURL("image/jpeg");
      const link = document.createElement("a");
      link.download = "chart.png";
      link.href = url;
      link.click();
    }
    };

    const downloadReceiptDmtSuccess=()=>{
      const canvas = document.getElementsByClassName("canvas-container")
      console.log(canvas);
      console.log("inside print fun")
    html2PDF(canvas, {
      jsPDF: {
        format: 'a4',
      },
      imageType: 'image/jpeg',
      output: './pdf/canvas.pdf'
    });
  }

  const getSaveData = () => {
    let a = saveableCanvas.current;
    console.log("current fun = ", a);

    let getSaveData = saveableCanvas.current.getSaveData();
    console.log(getSaveData);
    setSaveData(getSaveData);
  };

  const loadSaveData = () => {
    let a = saveableCanvas.current;
    console.log("current fun = ", a);

    let loadSaveData = saveableCanvas.current.loadSaveData(saveData);
    console.log("loadSaveData==", loadSaveData);

    const link = document.createElement("a"); // creating <a> element
    console.log("1=> ", link);
    link.download = `drawing.jpg`; // passing current date as link download value
    console.log("2=> ", link.download);

    console.log(saveableCanvas);
    console.log(saveableCanvas?.current);
    console.log(saveableCanvas?.current.canvas);

    console.log(saveableCanvas?.current.canvas.drawing);
    console.log(saveableCanvas?.current.canvas.grid);
    console.log(saveableCanvas?.current.canvas.interface);
    console.log(saveableCanvas?.current.canvas.temp);

    // link.href = cavasRef?.current?.canvas?.drawing?.toDataURL(); // passing canvasData as link href value
    // link.href = cavasRef?.current?.canvas?.grid?.toDataURL(); // passing canvasData as link href value
    // link.href = cavasRef?.current?.canvas?.interface?.toDataURL(); // passing canvasData as link href value
    // link.href = cavasRef?.current?.canvas?.temp?.toDataURL(); // passing canvasData as link href value
    console.log("3=> ", link.htef);
    link.click(); // clicking link to download image
    console.log("4=> ", link.click());
  };
  const undo = () => {
    let a = cavasRef.current;
    console.log("current fun = ", a);

    let undo = cavasRef.current.undo();
    console.log("getSaveData==", undo);
  };

  // console.log(cavasRef.current.getSaveData());
  // console.log(cavasRef.current.loadSaveData({"saveData":".jpg"},true));
  // console.log(cavasRef.current.clear());
  // console.log(cavasRef.current.undo());

  useEffect(() => {
    console.log(breshColor)
  }, [images,breshColor]);

  return (
    <>
      <div className="mainContainer">
        <div className="container-app">
          <Container fluid>
            <Row>
              <Col
                className="tools-col"
                xxl={{ span: 3, offset: 0 }}
                xl={{ span: 4, offset: 0 }}
                lg={{ span: 3, offset: 0 }}
                md={{ span: 1, offset: 3 }}
                sm={{ span: 1, offset: 2 }}
                xs={{ span: 1, offset: 0 }}
              >
                <section className="tools col">
                  <Row className="row">
                    <label className="title">Shapes</label>
                    <ul className="options">
                      <li className="option">
                        <img src={square} alt="" />
                        <h4>Rectangle</h4>
                      </li>

                      <li className="option">
                        <img src={Circle} alt="" />
                        <h4>Circle</h4>
                      </li>

                      <li className="option">
                        <img src={Triangle} alt="" />
                        <h4>Triangle</h4>
                      </li>
                    </ul>
                    <ul className="options">
                      <label className="title">Fill Color</label>
                      <li className="option">
                        <input
                          type="checkbox"
                          name="fill-color"
                          id="fill-color"
                        />
                        <h4 htmlFor="fill-color">Fill Color</h4>
                      </li>
                    </ul>
                  </Row>
                  <Row className="row">
                    <label className="title">Options</label>
                    <ul className="options">
                      <li className="option active">
                        <img src={Brush} alt="" />
                        <h4>Brush</h4>
                      </li>
                      <li className="option">
                        <img src={Eraser} alt="" />
                        <h4>Eiaser</h4>
                      </li>
                      <li className="option">
                        <input
                          type="range"
                          name="size-slider"
                          id="size-slider"
                          onChange={(events)=>{
                            setBreshsize(events.target.value);
                            console.log(events.target.value);
                            load();
                          }}
                        />
                      </li>
                    </ul>
                  </Row>
                  <Row className="row colors">
                    <label className="title-colors">Colors</label>
                    <ul className="coptions">
                      {/* <li className="option"></li>
                      <li className="option"></li>
                      <li className="option"></li>
                      <li className="option"></li> */}
                      <li className="option selected">
                        <input
                          type="color"
                          name="color-picker"
                          id="color-picker"
                          value={breshColor}
                          onChange={(events)=>{
                            setBreshColor(`${events.target.value}`);
                            console.log(events.target.value);
                            load();
                          }}
                        />
                      </li>
                    </ul>
                  </Row>
                  <Row className="row buttons">
                    <Button className="clear-canvas">Clear Canvas</Button>
                    <Button className="save-img">Save as Image</Button>
                  </Row>

                  <ImageUploading
                    multiple
                    value={images}
                    onChange={onChange}
                    maxNumber={maxNumber}
                    dataURLKey="data_url"
                  >
                    {({
                      imageList,
                      onImageUpload,
                      onImageRemoveAll,
                      onImageUpdate,
                      onImageRemove,
                      isDragging,
                      dragProps,
                    }) => (
                      // write your building UI
                      <div className="upload__image-wrapper">
                        {imageList.map((image, index) => (
                          <div key={index} className="image-item m-2">
                            {SetGetImage(image)}
                            {console.log("gettimg=", getImage)}
                            <img
                              src={image["data_url"]}
                              alt=""
                              width="100%"
                              id="myImage"
                            />
                            <div className="image-item__btn-wrapper">
                              <div className="m-2">
                                <Button
                                  variant="info"
                                  onClick={() => onImageUpdate(index)}
                                >
                                  Update
                                </Button>{" "}
                                <Button
                                  variant="danger"
                                  onClick={() => onImageRemove(index)}
                                >
                                  Remove
                                </Button>{" "}
                                <hr />
                                <Button
                                  variant="success"
                                  onClick={() => load()}
                                >
                                  load
                                </Button>{" "}
                                <Button
                                  variant="danger"
                                  onClick={() => clear()}
                                >
                                  clear
                                </Button>{" "}
                                {/* <Button
                                  variant="info"
                                  onClick={() => getSaveData()}
                                >
                                  getSaveData
                                </Button>{" "}
                                <Button
                                  variant="success"
                                  onClick={() => loadSaveData()}
                                >
                                  loadSaveData
                                </Button>{" "}
                                <Button
                                  variant="secondary"
                                  onClick={() => undo()}
                                >
                                  undo
                                </Button>{" "} */}
                              </div>
                              <hr />
                            </div>
                          </div>
                        ))}
                        <div className="mt-1 mb-2 mx-4">
                          <Button
                            className="mx-1 mt-1 mb-3"
                            lassName="pull-right"
                            style={isDragging ? { color: "red" } : undefined}
                            onClick={onImageUpload}
                            {...dragProps}
                          >
                            upload
                          </Button>
                          &nbsp;
                          <Button
                            className="mx-1 mt-1 mb-3"
                            onClick={onImageRemoveAll}
                          >
                            Remove
                          </Button>
                        </div>
                      </div>
                    )}
                  </ImageUploading>
                </section>
              </Col>
              <Col
                xxl={{ span: 9, offset: 0 }}
                xl={{ span: 8, offset: 0 }}
                lg={{ span: 8, offset: 1 }}
                md={{ span: 12, offset: 0 }}
                sm={{ span: 12, offset: 0 }}
                xs={{ span: 12, offset: 0 }}
              >
                <section className="canvas">
                  <div>
                    
                    {/* <CanvasDraw
                      ref={saveableCanvas}
                      brushColor={state.color}
                      brushRadius={state.brushRadius}
                      lazyRadius={state.lazyRadius}
                      canvasWidth={state.width}
                      canvasHeight={state.height}
                      imgSrc={state.backgroundImg}
                    /> */}

                    <CanvasDraw
                    id="myCanvas"
                    className="canvas-container"
                    // style={sectionStyle}
                    // ref={cavasRef}
                    // clear={clear}
                      ref={saveableCanvas}
                      brushColor={state.color}
                      brushRadius={state.brushRadius}
                      lazyRadius={state.lazyRadius}
                      canvasWidth={state.width}
                      canvasHeight={state.height}
                      imgSrc={state.backgroundImg}
                  />
                    <hr/>
                    <div style={{ textAlign: "right" }}>
                      <Button
                        onClick={() => {
                          localStorage.setItem(
                            "savedDrawing",
                            saveableCanvas.current.getSaveData()
                          );
                          console.log(saveableCanvas.current.getSaveData())
                        }}
                      >
                        Save
                      </Button>
                      &nbsp;
                      <Button
                        onClick={() => {
                          saveableCanvas.current.eraseAll();
                        }}
                      >
                        Erase
                      </Button>
                      &nbsp;
                      <Button
                        onClick={() => {
                          saveableCanvas.current.undo();
                        }}
                      >
                        Undo
                      </Button>
                      &nbsp;
                      <Button
                        onClick={() => {
                            let saveData = localStorage.getItem("savedDrawing"                         )
                           console.log(saveData);
                          saveableCanvas.current.loadSaveData(saveData,false)
                            
                        }}
                      >
                        LoadSaveData
                      </Button>
                      &nbsp;
                      <Button
                        onClick={() => {
                          console.log("fileType=",fileType);
                          console.log("useBgImage=",useBgImage);
                          console.log("backgroundColour=",backgroundColour);
                          
                            // saveableCanvas.current.getDataURL(
                            //     fileType,
                            //     useBgImage,
                            //     backgroundColour
                            // );

                            console.log(saveableCanvas.current.getDataURL(
                                fileType,
                                useBgImage,
                                backgroundColour
                              ))
                          
                          alert("DataURL written to console");
                        }}
                      >
                        GetDataURL
                      </Button>
                      &nbsp;
                      <Button 
                      variant="success"
                        onClick={() => {
                          console.log("download");
                          handleChartDownload(saveableCanvas);
                        }}
                      >
                        Download
                      </Button>
                      &nbsp;
                      <Button 
                      variant="info"
                        onClick={() => {
                          console.log("download");
                          downloadReceiptDmtSuccess();
                        }}
                      >
                        Print
                      </Button>
                      &nbsp;
                      &nbsp;
                    </div>
                    <hr />
                    <div style={{ display: "inline" }}>
                      <label style={{ display: "inline" }}>Width:</label>
                      <input
                        type="number"
                        value={state.width}
                        onChange={(e) =>
                          setState({ width: parseInt(e.target.value, 10) })
                        }
                      />
                    </div>
                    <div style={{ display: "inline" }}>
                      <label style={{ display: "inline" }}>Height:</label>
                      <input
                        type="number"
                        value={state.height}
                        onChange={(e) =>
                          setState({ height: parseInt(e.target.value, 10) })
                        }
                      />
                    </div>
                    <div style={{ display: "inline" }}>
                      <label style={{ display: "inline" }}>Brush-Radius:</label>
                      <input
                        type="number"
                        value={state.brushRadius}
                        onChange={(e) =>
                          setState({
                            brushRadius: parseInt(e.target.value, 10),
                          })
                        }
                      />
                    </div>
                    <div style={{ display: "inline" }}>
                      <label style={{ display: "inline" }}>Lazy-Radius:</label>
                      <input
                        type="number"
                        value={state.lazyRadius}
                        onChange={(e) =>
                          setState({ lazyRadius: parseInt(e.target.value, 10) })
                        }
                      />
                    </div>
                  </div>

                  {/* <CanvasDraw
                    id="myCanvas"
                    className="canvas-container"
                    style={sectionStyle}
                    ref={cavasRef}
                    clear={clear}
                  /> */}
                  {/* <canvas
                    
                    id="myCanvas"
                    className="canvas-container"
                    style={sectionStyle}
                  >    
                  </canvas> */}
                </section>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default DrawingCanvas;
