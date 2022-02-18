import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({children, layoutData: { generalData, footerData }}) => {
  return (
    <div>
      <Head >
        <title>{generalData?.data?.seo_title}</title>
        {generalData.data.seo_description && (
          <meta name="description" content={generalData?.data?.seo_description} />
        )}
        {generalData?.data?.seo_keywords && (
          <meta name="keywords" content={generalData?.data?.seo_keywords}></meta>
        )}
        <meta property="og:locale" content="es" />
        <meta property="og:type" content="website" />
        {generalData?.data?.seo_title && (
          <meta property="og:title" content={generalData?.data?.seo_title} />
        )}
        {generalData?.data?.seo_description && (
          <meta property="og:description" content={generalData?.data?.seo_description} />
        )}
        {generalData?.data?.seo_img?.url && (
          <meta property="og:image" content={generalData?.data?.seo_img?.url} />
        )}
        <meta property="og:url" content={`https://jetour.altosandes.com.pe/x70`} />
        <meta name="twitter:card" content="summary_large_image" />
        {generalData?.data?.seo_img?.alt && (
          <meta name="twitter:image:alt" content={generalData?.data?.seo_img?.alt} />
        )}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer data={footerData}/>
    </div>
  );
}

export default Layout;
