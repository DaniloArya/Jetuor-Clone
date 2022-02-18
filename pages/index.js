import Layout from "../src/components/layout"
import Client  from "../lib/prismicConfiguration"

export const getStaticProps  = async  ({ previewData }) => {
  const ref = previewData ? previewData.ref : null;
  const footerData = await Client().getSingle('footer', { ref })
  const generalData = await Client().getSingle('general', { ref })
  return {
    props: {
      layoutData: {
        footerData,
        generalData,
      }
    },
  };
}

export default function Home({layoutData}) {
  return (
    <Layout layoutData={layoutData}>
      <h1 className="text-3xl font-bold underline"> Hello world! </h1>
      <div className="h-96"></div>
    </Layout>
  );
}