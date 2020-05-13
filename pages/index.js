import { css } from '@emotion/css';
import tw from '@tailwindcssinjs/macro';
import ButtonCss from 'components/ButtonCss';
import ButtonReact from 'components/ButtonReact';
import ButtonStyled from 'components/ButtonStyled';

const Index = () => (
  <div
    className={css(tw`bg-pink-200 grid justify-center items-center h-screen`)}
  >
    <div
      className={css(tw`text-red-500 break-all text-center max-w-md mx-auto`)}
    >
      Hello, we are presenting you with an assortment of button configs to
      choose from
    </div>
    <button
      type="button"
      className={css(
        tw`text-white bg-purple-300 py-2 px-4 border border-purple-700 rounded`
      )}
    >
      Inline styled with @tailwindcssinjs/macro
    </button>
    <ButtonCss>@emotion/css</ButtonCss>
    <ButtonReact>@emotion/react</ButtonReact>
    <ButtonStyled>@emotion/styled</ButtonStyled>
  </div>
);

export default Index;
