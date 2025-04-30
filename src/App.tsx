import { Form, Input, Select, Button, Card } from 'antd';
import './App.css';

function App() {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('表单提交值:', values);
  };

  return (
    <div className="container">
      <Card title="短链接生成">
        <Form
          form={form}
          name="shortLinkForm"
          onFinish={onFinish}
          layout="vertical"
          autoComplete="off"
        >
          <Form.Item
            label="短链接字段"
            name="shortLink"
            rules={[{ required: true, message: '请输入短链接字段' }]}
          >
            <Input placeholder="请输入短链接字段" />
          </Form.Item>

          <Form.Item
            label="链接类型"
            name="linkType"
            rules={[{ required: true, message: '请选择链接类型' }]}
          >
            <Select placeholder="请选择链接类型">
              <Select.Option value="normal">无效</Select.Option>
              <Select.Option value="custom">拓展</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="数量"
            name="quantity"
            rules={[{ required: true, message: '请输入数量' }]}
          >
            <Input type="number" placeholder="请输入数量" min={1} />
          </Form.Item>

          <Form.Item
            label="返回类型"
            name="returnType"
            rules={[{ required: true, message: '请选择返回类型' }]}
          >
            <Select placeholder="请选择返回类型">
              <Select.Option value="expand">拓展</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              提交
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}

export default App;
