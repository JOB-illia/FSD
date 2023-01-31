import type { FC } from 'react';
import { ThemeColors } from '~/src/shared/themed';
import { Button, TextBody, variant_body } from '~/src/shared/ui';
import { white } from '~/src/shared/themed/colors';

const ByEmail: FC = () => {
  return (
    <Button variants={ThemeColors.secondary} onPress={() => console.log('da')}>
      <TextBody variantSizes={variant_body.text_1} color={white}>
        Continue with Email
      </TextBody>
    </Button>
  );
};

export default ByEmail;
