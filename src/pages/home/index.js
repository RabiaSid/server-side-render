import React, { Suspense } from "react";
import HomeSectionOne from '../../section/Home-Section-1'
import HomeSectionTwo from '../../section/Home-Section-2'
import HomeSectionThree from '../../section/Home-Section-3'
import HomeSectionFour from '../../section/Home-Section-4'
import HomeSectionfive from '../../section/Home-Section-5'
import HomeSectionSix from '../../section/Home-section-6'
import HomeSectionSeven from '../../section/Home-Section-7'
import HomeSectionEight from '../../section/Home-section-8'
import HomeSectionNine from '../../section/Home-Section-9'
import HomeSectionTen from '../../section/Home-Section-10'
import HomeSectionEleven from '../../section/Home-Section-11'


const HomeModule = React.lazy(() => {
  return new Promise((resolve) => setTimeout(resolve, 2000)).then(() =>
    import("../../components/seo/homeModule")
  );
});


const AppHome = () => {
  return (

    <>
      <HomeSectionOne />
      <HomeSectionTwo />
      <HomeSectionThree />
      <HomeSectionFour />
      <HomeSectionfive />
      <HomeSectionSix />
      <HomeSectionSeven />
      <HomeSectionEight />
      <HomeSectionNine />
      <HomeSectionTen />
      <HomeSectionEleven />
      <Suspense fallback={<p>Loading...</p>}>
        <HomeModule />
      </Suspense>
    </>
  )
}

export default AppHome