import { Box, Flex, Grid, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

import { poppins_400_16_24 } from '@/styles/fontStyles';
import { getColorByIndex } from 'src/functions/utils/getColorsByIndex';
import { BarsChart } from './BarChart';
import analyticsSelectors from 'store/analytics/analytics-selectors';
import useCountWithPercentage from 'src/functions/customHooks/useCountWithPercentage';

export const ByOsChart = () => {
	const googleAnalytics = useSelector(analyticsSelectors.getAnalyticsDataFromGoogle);
	const osDataArray = googleAnalytics?.analytics?.filteredOperatingSystemGoogleResponse;
	const osList = useCountWithPercentage(osDataArray, 'name');

	return (
		<Grid
			templateColumns='repeat(2, 1fr)'
			w={'100%'}
			p={'24px 0px 24px 10px'}
			align={'center'}
			gap={'24px'}
		>
			<BarsChart data={osList} sizeBar={30} />
			<UnorderedList w={'100%'} m={'0px'} pl={'7px'} display={'flex'} flexDir={'column'} gap={'8px'}>
				{osList?.map((item, index) => {
					const colorStyle = getColorByIndex(index);
					return (
						<ListItem
							key={item.name}
							w={'100%'}
							sx={{
								color: colorStyle,
								fontSize: '22px',
							}}
						>
							<Flex alignItems={'center'} justifyContent={'space-between'} w={'100%'} gap={'5px'}>
								<Text sx={poppins_400_16_24} color={'textColor.black'}>
									{item.name}
								</Text>
								<Text sx={poppins_400_16_24} color={'textColor.gray'}>
									{item.percentage}%
								</Text>
							</Flex>
						</ListItem>
					);
				})}
			</UnorderedList>
		</Grid>
	);
};
