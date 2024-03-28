# OurUI

OurUI - это открытая библиотека компонентов, предназначенная для создания пользовательского интерфейса веб-приложений. Наша библиотека предлагает набор многофункциональных компонентов, которые могут быть легко интегрированы в ваш проект, помогая вам ускорить разработку и обеспечить единообразный дизайн.

Вы можете посетить страницу [Storybook/our-ui](https://dev--6602cce8503596ca661e35c8.chromatic.com/) для просмотра UI и её документации.

## Компоненты

Пока что в OurUI доступно ограниченное количество компонентов, но мы продолжаем активно развивать и расширять наш набор. Вот список компонентов, которые в настоящее время доступны:

-   **Checkbox**: Компонент для создания пользовательских флажков.
-   **Button**: Компонент для создания кнопок с различными вариантами стилизации.
-   **Dialog**: Компонент для отображения модальных диалоговых окон.
-   **Popover**: Компонент для создания всплывающих окон, обычно используемых для отображения дополнительной информации или меню.
-   **Flex**: Компонент для создания гибких контейнеров с использованием Flexbox для управления расположением дочерних элементов.

## Использование

Для использования компонентов OurUI в вашем проекте, просто установите библиотеку через npm или yarn и импортируйте необходимые компоненты в вашем коде. Например:

#### `npm install our-ui`

#### `yarn add our-ui`

```jsx
import { Checkbox, Button, Dialog, Popover, Flex } from 'ourui';

// Использование компонентов
const MyComponent = () => {
    const popoverButtonRef = useRef(null);
    const [isOpen, setOpen] = useState(false);
    const [isChecked, setChecked] = useState(true);
    const [isDialogOpen, setDialogOpen] = useState(false);

    const handleToggleDialog = (): void => {
        setDialogOpen((prev) => !prev);
    };

    const handleCloseDialog = (): void => {
        setDialogOpen(false);
    };

    const handleChange = () => {
        setChecked((prev) => !prev);
    };

    const handleTogglePopover = () => {
        setOpen((prev) => !prev);
    };

    const handleClosePopover = () => {
        setOpen(false);
    };

  return (
    <Flex direction='column' gap={20}>
        <Button 
            color="primary" 
            variant="outlined" 
            ref={popoverButtonRef} 
            onClick={handleTogglePopover}
        >
            Click me
        </Button>
        <Popover 
            anchorEl={popoverButtonRef} 
            isOpen={isOpen} 
            onClose={handleClosePopover}
        >
            Popover Content
        </Popover>

        <Button 
            variant="outlined" 
            color="primary" 
            onClick={handleToggleDialog}
        >
            Click me
        </Button>
        <Dialog 
            isOpen={isDialogOpen} 
            onClose={handleCloseDialog}
        >
            Dialog Content
        </Dialog>
        <label>
            <Checkbox checked={isChecked} onChange={handleChange}/>
            Checkbox label
        </label>
    </Flex>
  );
};
```
