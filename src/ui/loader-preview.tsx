import { useEffect, useState } from "react";
import "./loader.css";

export default function LoaderPreview({ svgOption }: { svgOption: svgConfig }) {
  const [lightMode, setLightMode] = useState(false);

  const [path, setPath] = useState(`<path
  opacity="1.000000"
  d=" M1190.177979,1114.171631    C1150.790039,1158.558472 1106.414185,1196.676147 1057.206421,1229.114380    C1020.172485,1253.527710 980.895508,1273.716187 939.164734,1289.851074    C912.274841,1214.509766 861.391235,1162.646362 786.596985,1134.592407    C796.821838,1129.976685 807.385254,1125.863770 817.344299,1120.605957    C881.844177,1086.554199 925.169922,1034.708984 942.987244,963.872925    C963.936768,880.584045 945.271606,805.539368 889.351868,740.345093    C878.705444,727.932983 865.447449,717.743530 853.225647,706.715637    C850.968689,704.679077 850.074219,703.340271 851.430115,700.205444    C878.213013,638.286194 913.947083,582.057739 958.779663,531.681824    C970.511169,518.499817 983.204956,506.177032 995.331177,493.340912    C997.546936,490.995453 999.290527,490.886749 1002.157776,492.258911    C1058.315552,519.133118 1123.001953,475.225830 1118.906738,413.090363    C1116.243652,372.681274 1082.476196,339.317749 1043.561768,336.759186    C1001.111389,333.968170 962.987549,363.151886 956.259583,405.745148    C953.746643,421.653931 955.886841,437.315338 962.869141,452.017761    C964.259277,454.945068 963.874817,456.609619 961.583984,458.798889    C897.869934,519.689514 848.186768,590.533142 811.589478,670.633240    C810.290283,673.476807 809.022217,676.334717 807.715393,679.239868    C739.643005,649.647339 671.883911,649.620422 603.591858,679.274963    C565.523438,592.088928 511.555420,516.118347 442.032898,450.982849    C450.947052,429.798065 450.920227,408.538879 442.484222,387.350616    C435.656586,370.202057 424.054321,356.968079 408.134552,347.727844    C373.329926,327.526337 330.283600,335.305542 304.778076,365.145660    C279.192230,395.079803 278.565125,438.451263 302.883636,469.184296    C326.191864,498.640564 370.698151,511.410522 411.672058,487.079712    C418.886444,494.858582 426.319244,503.131409 434.025787,511.140839    C487.094696,566.295593 528.657166,629.105774 559.534912,699.085449    C561.156128,702.759827 560.970459,704.617737 557.581726,707.225281    C520.025146,736.124390 492.315857,772.457397 475.691681,817.000732    C463.591339,849.422852 458.654327,882.896545 460.794220,917.463928    C463.795380,965.943909 479.546204,1009.766846 508.709076,1048.603760    C538.162354,1087.827393 575.940613,1116.035522 622.059631,1132.949097    C622.679993,1133.176636 623.305481,1133.400269 623.898376,1133.687988    C624.184326,1133.826782 624.399780,1134.110596 624.674011,1134.352539    C548.358521,1163.374512 497.227356,1216.588013 470.562286,1294.451538    C455.433990,1288.058716 440.134216,1282.135986 425.294739,1275.224976    C372.988892,1250.865479 324.369843,1220.528320 280.220184,1183.327271    C198.437241,1114.415771 136.306427,1030.916748 95.037117,932.096741    C73.066536,879.487915 58.498413,824.886292 50.833851,768.400146    C44.377605,720.819031 43.034622,673.076904 47.240440,625.294250    C58.466484,497.754028 102.671783,382.800781 180.951004,281.386688    C260.903412,177.804855 363.011841,104.536148 486.525818,61.363628    C529.983398,46.173668 574.728760,36.272003 620.492188,30.809538    C655.824219,26.592196 691.245239,24.915426 726.744690,26.446747    C818.014160,30.383783 905.143250,51.554951 986.933716,92.447189    C1142.909790,170.429550 1251.905029,291.289154 1313.943115,454.291199    C1331.705444,500.960602 1342.990967,549.273376 1349.189209,598.834106    C1353.751221,635.312500 1355.425171,671.914185 1353.766113,708.576599    C1348.447021,826.117371 1314.270508,934.610962 1250.810059,1033.826294    C1232.730347,1062.092651 1212.481201,1088.672241 1190.177979,1114.171631  z"
/>`);

  useEffect(() => {
    document
      .getElementById("loader")
      ?.style.setProperty("--startingOffset", svgOption.startOffset.toString());
    document
      .getElementById("loader")
      ?.style.setProperty("--endingOffset", svgOption.endOffset.toString());
  }, [svgOption.startOffset, svgOption.endOffset]);

  return (
    <>
      <div className="m-6 mb-0">
        <label className="inline-flex items-center cursor-pointer ml-4">
          <input
            type="checkbox"
            value=""
            className="sr-only peer"
            onChange={(e) => {
              setLightMode((v) => !v);
            }}
          />
          <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-black dark:peer-focus:ring-white rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-black after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-black after:border-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-white"></div>
          <p className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            Light background
          </p>
        </label>

        <div
          className={`rounded-lg ${
            lightMode ? "bg-white" : "bg-black"
          }  p-6 m-2`}
        >
          <svg
            id="loader"
            xmlns="http://www.w3.org/2000/svg"
            width={svgOption.width}
            height={svgOption.height}
            viewBox="0 0 1406 1372"
            style={{
              animationName: "load",
              animationIterationCount: "infinite",
              animationTimingFunction: `${svgOption.animationCurve}`,
              animationDuration: `${svgOption.animationDuration}s`,
              fill: `${svgOption.fillColor}`,
              strokeDasharray: `${svgOption.strokeDasharray}`,
              strokeWidth: `${svgOption.strokeWidth}`,
              stroke: `${svgOption.strokeColor}`,
            }}
            dangerouslySetInnerHTML={{ __html: path }}
          ></svg>
        </div>
      </div>
      <div className="w-full px-6 pb-8">
        <label
          htmlFor="path"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-4"
        >
          Custom SVG Path
        </label>
        <input
          type="text"
          id="path"
          value={path}
          onChange={(e) => {
            setPath(e.target.value);
          }}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="<path>...</path>"
        />
      </div>
    </>
  );
}
