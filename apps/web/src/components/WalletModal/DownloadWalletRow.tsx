import { InterfaceElementName } from '@uniswap/analytics-events'
import { GooglePlayStoreLogo } from 'components/Icons/GooglePlayStoreLogo'
import { Wiggle } from 'pages/Landing/components/animations'
import { useTranslation } from 'react-i18next'
import { Anchor, Flex, FlexProps, Image, Text, TextProps, TouchableArea } from 'ui/src'
import { CHROME_LOGO } from 'ui/src/assets'
import { AppStoreLogo } from 'ui/src/components/icons/AppStoreLogo'
import { RightArrow } from 'ui/src/components/icons/RightArrow'
import { uniswapUrls } from 'uniswap/src/constants/urls'
import { Trace } from 'uniswap/src/features/telemetry/Trace'
import { isMobileWeb, isWebAndroid, isWebIOS } from 'utilities/src/platform'

export function DownloadWalletRow({
  onPress,
  titleTextVariant = 'buttonLabel3',
  iconSize = 20,
  ...rest
}: {
  onPress: () => void
  titleTextVariant?: TextProps['variant']
  iconSize?: number
} & FlexProps) {
  const { t } = useTranslation()
  return (
    <TouchableArea onPress={onPress}>
      {/*
      <Flex
        row
        justifyContent="center"
        alignItems="center"
        gap="$gap8"
        backgroundColor="$accent2"
        p="$spacing12"
        {...rest}
        $md={{ borderRadius: '$rounded20', mt: 0, p: '$spacing16', ...rest.$md }}
      >
        <Text variant={titleTextVariant} color="$accent1" mr="auto" $md={{ variant: 'buttonLabel3' }}>
          {isMobileWeb ? t('common.getUniswapWallet.mobile') : t('common.getUniswapWallet')}
        </Text>
        <RightArrow size={iconSize} color="$neutral1" />
      </Flex>
      */}
      <Flex mt={12} alignItems="center">
        <Text variant="body3" color="$accent1" style={{ fontWeight: 700 }}>
          Develop & Modified By <a href="https://www.linkedin.com/in/uxmrinal/" target="_blank" rel="noopener noreferrer" style={{ color: '#A47EFF', textDecoration: 'underline' }}>Mrinal</a>
        </Text>
      </Flex>
    </TouchableArea>
  )
}
