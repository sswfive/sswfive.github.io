import type { SidebarsConfig } from '@docusaurus/plugin-content-docs'

const sidebars: SidebarsConfig = {
  skill: [
    'skill/introduction',
    // {
    //   label: '编程语言',
    //   type: 'category',
    //   link: { type: 'generated-index' },
    //   items:[
    //     {
    //       label: 'Python',
    //       type: 'category',
    //       link: { type: 'generated-index' },
    //       items:[
    //       ],
    //     }
    //   ]
    // },
    {
      label: 'ModelOps技术',
      type: 'category',
      link: { type: 'generated-index' },
      items:[
        {
          label: '机器学习基础',
          type: 'category',
          link: { type: 'generated-index' },
          items:[
            'skill/modelops/ml_basic/ml-basic',
            'skill/modelops/ml_basic/ml-work-flow',
            'skill/modelops/ml_basic/model-evalution',
            'skill/modelops/ml_basic/data-mining',
          ],
        },
        {
          label: '模型工程化',
          type: 'category',
          link: { type: 'generated-index' },
          items:[
            'skill/modelops/model_ops/modelops-common-tech',
            'skill/modelops/model_ops/kserve-deploy',
          ],
        },
       
      ]
    },
    {
      label: '云原生技术',
      type: 'category',
      link: { type: 'generated-index' },
      items:[
        {
          label: 'Kubernetes',
          type: 'category',
          link: { type: 'generated-index' },
          items:[
            'skill/cloudnative/k8s/helm-usage',
            'skill/cloudnative/k8s/longhorn-deploy',
            'skill/cloudnative/k8s/ktconnect-usage',
          ],
        },
        // {
        //   label: 'Docker',
        //   type: 'category',
        //   link: { type: 'generated-index' },
        //   items:[
        //     'skill/cloudnative/docker/docker-image-pull-problem-for-solution',
        //   ],
        // }
        
      ]
    },
    {
      label: '大数据技术',
      type: 'category',
      link: { type: 'generated-index' },
      items:[
        {
          label: 'Spark',
          type: 'category',
          link: { type: 'generated-index' },
          items:[
            'skill/bigdata/spark/spark-first-know',
            'skill/bigdata/spark/spark-rdd',
            'skill/bigdata/spark/spark-scheduler-system',
            'skill/bigdata/spark/spark-shuffle',
            'skill/bigdata/spark/spark-distribute-compute',
          ],
        }
      ]
    },
  ],
  python: [
    'python/introduction',
    {
      label: '工程实践',
      type: 'category',
      link: { type: 'generated-index' },
      items: [
        'python/PythonEngineerPractice/pypi-source-usage'
      ],
    },
    {
      label: '每日一库',
      type: 'category',
      link: { type: 'generated-index' },
      items: [
        'python/PythonLibs/python-libs-awesome',
        'python/PythonLibs/pathlib-usage',
      ],
    }
  ],
  tools: [
    'tools/introduction',
    'tools/common-dev-tools-collection',
    {
      label: '开发类工具',
      type: 'category',
      link: { type: 'generated-index' },
      items: [
        'tools/toolbox/common-dev-tools-install',
      ]
    },
    {
      label: '综合类工具',
      type: 'category',
      link: { type: 'generated-index' },
      items: [
        'tools/toolbox/dev-tools',
        'tools/toolbox/design-tools',
        'tools/toolbox/typing-practice-website',
      ]
    },
    {
      label: 'Plugins',
      type: 'category',
      link: {
        type: 'doc',
        id: 'tools/plugins/plugins-guide',
      },
      items: [
        'tools/plugins/chrome-plugins',
        'tools/plugins/vscode-plugins'
      ]
    },
    ],
}

module.exports = sidebars