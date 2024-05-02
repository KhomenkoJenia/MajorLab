import CreateOrEditLanding from '@/components/CreateWebPages/CreateOrEditLanding/CreateOrEditLanding';
import WebPagesConstructorLayout from '@/components/Layouts/WebPagesConstructorLayout';
import Meta from '@/components/Meta/Meta';

const CreateSellLandingPageBap = () => {
	return (
		<>
			<Meta title='Create landing page' />
			<WebPagesConstructorLayout webpagesTypeId={2}>
				<CreateOrEditLanding />
			</WebPagesConstructorLayout>
		</>
	);
};

export default CreateSellLandingPageBap;
