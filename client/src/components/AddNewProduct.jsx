import {
  Tr,
  Td,
  Button,
  VStack,
  Textarea,
  Tooltip,
  Input,
  FormControl,
  Switch,
  FormLabel,
  Text,
  Badge,
  InputGroup,
  InputLeftAddon,
  Flex
} from '@chakra-ui/react';
import { useState } from 'react';
import { MdDriveFolderUpload } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { uploadProduct } from '../redux/actions/adminActions';

const AddNewProduct = () => {
  const dispatch = useDispatch();
  const [brand, setBrand] = useState('');
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [stock, setStock] = useState('');
  const [price, setPrice] = useState('');
  const [productIsNew, setProductIsNew] = useState(true);
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const createNewProduct = () => {
    dispatch(uploadProduct({ brand, name, category, stock, price, image, productIsNew, description }));
  };

  return (
    <Tr>
      <Td>
        <InputGroup size='sm'>
          <InputLeftAddon children='Image File Name' />
        </InputGroup>
        <Tooltip label={'Set the name of your image e.g., iPhone.jpg'} fontSize='sm'>
          <Input size='sm' value={image} onChange={(e) => setImage(e.target.value)} placeholder='e.g., iPhone.jpg' />
        </Tooltip>
      </Td>
      <Td>
        <InputGroup size='sm'>
          <InputLeftAddon children='Description' />
        </InputGroup>
        <Textarea
          value={description}
          w='270px'
          h='120px'
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          placeholder='Description'
          size='sm'
        />
      </Td>
      <Td>
        <Flex direction='column' gap='2'>
          <InputGroup size='sm'>
            <InputLeftAddon children='Brand' />
            <Input
              size='sm'
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              placeholder='Apple or Samsung etc.'
            />
          </InputGroup>
          <InputGroup size='sm'>
            <InputLeftAddon children='Name' />
            <Input size='sm' value={name} onChange={(e) => setName(e.target.value)} placeholder='iPhone 14 Pro 512G' />
          </InputGroup>
        </Flex>
      </Td>

      <Td>
        <Flex direction='column' gap='2'>
          <InputGroup size='sm'>
            <InputLeftAddon children='Category' />
            <Input size='sm' value={category} onChange={(e) => setCategory(e.target.value)} placeholder='Electronics' />
          </InputGroup>
          <InputGroup size='sm'>
            <InputLeftAddon children='Price Tag' />
            <Input size='sm' value={price} onChange={(e) => setPrice(e.target.value)} placeholder='299.99' />
          </InputGroup>
        </Flex>
      </Td>

      <Td>
        <Flex direction='column' gap='2'>
          <InputGroup size='sm'>
            <InputLeftAddon children='Stock' />
            <Input size='sm' value={stock} onChange={(e) => setStock(e.target.value)} />
          </InputGroup>
          <Text ml='2' fontSize='sm'>
            New badge shown on product card
          </Text>
          <FormControl ml='2' display='flex' alignItems='center'>
            <FormLabel htmlFor='productIsNewFlag' mb='0' fontSize='sm'>
              Enable
              <Badge rounded='full' px='1' mx='1' fontSize='0.8em' colorScheme='green'>
                New
              </Badge>
              badge ?
            </FormLabel>
            <Switch id='productIsNewFlag' onChange={() => setProductIsNew(!productIsNew)} isChecked={productIsNew} />
          </FormControl>
        </Flex>
      </Td>
      <Td>
        <VStack>
          <Button variant='outline' w='160px' colorScheme='orange' onClick={() => createNewProduct()}>
            <Text ml='2'>Save Product</Text>
            <MdDriveFolderUpload />
          </Button>
        </VStack>
      </Td>
    </Tr>
  );
};

export default AddNewProduct;
