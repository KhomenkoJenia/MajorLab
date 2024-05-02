import CreateOrEditLanding from '@/components/CreateWebPages/CreateOrEditLanding/CreateOrEditLanding';
import WebPagesConstructorLayout from '@/components/Layouts/WebPagesConstructorLayout';
import Meta from '@/components/Meta/Meta';

const CreateStreamingLandingPageReleases = () => {
	return (
		<>
			<Meta title='Create landing page' />
			<WebPagesConstructorLayout webpagesTypeId={3}>
				<CreateOrEditLanding />
			</WebPagesConstructorLayout>
		</>
	);
};

export default CreateStreamingLandingPageReleases;
