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
    {
      label: '算法学习笔记',
      type: 'category',
      link: { type: 'generated-index' },
      items:[
        {
          label: '基础知识',
          type: 'category',
          description: '本部分内容主要是对数据结构与算法的学习总结（文章均以倒序排列)',
          link: { type: 'generated-index' },
          items:[
            'skill/algods/base/big-O',
            'skill/algods/base/algods-understand',
            'skill/algods/base/algods-learn-docs',
          ],
        },
        {
          label: '数据结构',
          type: 'category',
          link: { type: 'generated-index' },
          items:[
            'skill/algods/datastruct/datastruct-list',
            'skill/algods/datastruct/datastruct-array',
            'skill/algods/datastruct/datastruct-equeue',
            'skill/algods/datastruct/datastruct-stack',
          ],
        },
        {
          label: '常用算法',
          type: 'category',
          link: { type: 'generated-index' },
          items:[
            'skill/algods/algo/algo-recursion',
            'skill/algods/algo/algo-sort',
            'skill/algods/algo/algo-hash',
            'skill/algods/algo/algo-encrypt',
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
        'python/PythonLibs/apscheduler-usage',
        'python/PythonLibs/supervisor-usage',
        'python/PythonLibs/subprocess-usage',
        'python/PythonLibs/pathlib-usage',
      ],
    }
  ],
  tools: [
    'tools/introduction',
    'tools/toolbox/open-source-solution',
    'tools/toolbox/quickly-deploy-solution',
    'tools/toolbox/dev-tools',
    {
      label: '综合类工具',
      type: 'category',
      link: { type: 'generated-index' },
      items: [
        'tools/toolbox/common-dev-tools-collection',
        'tools/toolbox/design-tools',
        'tools/toolbox/typing-practice-website',
      ]
    },
    {
      label: '常用插件',
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
