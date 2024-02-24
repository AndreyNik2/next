interface Props {
    params: {
        id:string[]
    }
}

export default function Post({ params }: Props) {
    return (
      <div>
        <p>params : {JSON.stringify(params)}</p>
      </div>
    );
}
